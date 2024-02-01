// express-backend.ts
import { Express, Response, Request } from 'express';
import { v4 as uuidv4 } from 'uuid';
import Semaphore from 'semaphore';

const semaphore = Semaphore(1);
const sessionQueue: string[] = [];

export const semaphoreRoute = (app: Express) => {
  const text = "/semaphore";

  app.get([text, `${text}/:hash`], (req: Request, res: Response) => {
    const sessionId = req.params.hash;

    if (sessionQueue.length > 0 && sessionQueue[0] === sessionId) {
      res.status(200).json({ message: 'Authorized' });
    } else {
      res.status(403).json({ message: 'Unauthorized' });
    }
  });

  app.put(text, (req: Request, res: Response) => {
    const sessionId = uuidv4();

    semaphore.take(() => {
      if (sessionQueue.length === 0) {
        sessionQueue.push(sessionId);
        res.status(200).json({ sessionId });
      } else {
        res.status(403).json({ message: 'Access denied. Another user is already on the secure screen.' });
      }
      semaphore.leave();
    });
  });

  app.delete(text, (req: Request, res: Response) => {
    semaphore.take(() => {
      if (sessionQueue.length > 0) {
        sessionQueue.shift();
        res.status(200).json({ message: 'Session closed' });
      } else {
        res.status(403).json({ message: 'No active session to close.' });
      }
      semaphore.leave();
    });
  });
};

export default semaphoreRoute;
