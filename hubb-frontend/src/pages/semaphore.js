// SecureScreen.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SecureScreen = () => {
  const [sessionId, setSessionId] = useState(null);
  const [screenStatus, setScreenStatus] = useState("Closed");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleOpenSession = () => {
    if (sessionId) {
      setErrorMessage("Another session is already open. Please close the current session before opening a new one.");
      return;
    }

    axios.put('http://localhost:3001/semaphore')
      .then(response => {
        setSessionId(response.data.sessionId);
        setScreenStatus("Open");
        setErrorMessage(null);
      })
      .catch(error => {
      setErrorMessage("Another session is already open. Please close the current session before opening a new one.");
      console.error('Error requesting session:', error);
      });
  };

  const handleCloseSession = () => {
    axios.delete('http://localhost:3001/semaphore')
      .then(response => {
        console.log('Session closed:', response.data.message);
        setSessionId(null);
        setScreenStatus("Closed");
      })
      .catch(error => {
        console.error('Error closing session:', error);
      });
  };

  return (
    <div>
      {sessionId ? (
        <div>
          <h1>Secure Screen: Open</h1>
          <button onClick={handleCloseSession}>Close Session</button>
        </div>
      ) : (
        <div>
          <h1>Secure Screen: {screenStatus}</h1>
          {errorMessage && <p>{errorMessage}</p>}
          <button onClick={handleOpenSession}>Open Session</button>
        </div>
      )}
    </div>
  );
};

export default SecureScreen;
