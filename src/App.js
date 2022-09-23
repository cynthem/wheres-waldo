import React, { useState } from 'react';
import Header from './components/Header';
import PreGame from './components/PreGame';
import Game from './components/Game';

function App() {
  const [isStarted, setIsStarted] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
  }

  return (
    <div className="App">
      <Header />
      {!isStarted &&
        <PreGame handleStart={handleStart} />
      }
      {isStarted &&
        <Game />
      }
    </div>
  );
}

export default App;