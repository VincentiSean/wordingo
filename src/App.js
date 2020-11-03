import './App.scss';

import React, { useState, useEffect } from 'react';

import FlashScreen from './components/flashscreen';
import Login from './components/login';

function App() {

  const [splashScreen, setSplash] = useState(true);
  // const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplash(false)
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {splashScreen 
      ? <FlashScreen />
      : <Login />
      }
    </div>
  );
}

export default App;
