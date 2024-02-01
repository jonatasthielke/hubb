import express, { Request, Response } from 'express';
import semaphoreRoute from './routes/semaphore';
import cors from 'cors'
const app = express();
const port = 3001;

app.use(cors())

app.use((req,res,next)=>{
    console.log(req.url)
    next()
})

semaphoreRoute(app);
app.get('/', (req: Request, res: Response) => {
    res.status(200).send('success')
});


app.listen(port, () => {
    console.log(`server runng at port ${port}`)
});
