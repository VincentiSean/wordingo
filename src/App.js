import './App.scss';
import fire from './config/Fire';
import React, { useState, useEffect } from 'react';

import FlashScreen from './components/flashscreen';
import Login from './components/login';
import Home from './components/home';

function App() {

  const [splashScreen, setSplash] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  let home = loggedIn
    ? (<Home user={user} />)
    : (<Login />);

  useEffect(() => {
    authListener();
    const timer = setTimeout(() => {
      setSplash(false)
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  function authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
        setUser(user);
      } else {
        setLoggedIn(false);
        setUser(null);
      }
    })
  }

  return (
    <div className="App">
      {splashScreen 
        ? <FlashScreen />
        : home
      }
    </div>
  );
}

export default App;
