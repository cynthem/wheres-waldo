import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import PreGame from './components/PreGame';
import Game from './components/Game';
import charList from './helpers/charList';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const [time, setTime] = useState(null);
  const [characters, setCharacters] = useState(charList);
  const timerRef = useRef(null);

  const handleStartGame = () => {
    setGameStarted(true);
    setTimerStarted(true);
    timerRef.current = setInterval(() => {
      setTime(time => time + 1)
    }, 1000);
  }

  const handleStopGame = () => {
    setTimerStarted(false);
    clearInterval(timerRef.current);
  }
  

  return (
    <div className="App">
      <Header 
        characters={characters}
        gameStarted={gameStarted}
        timerStarted={timerStarted}
        time={time}
      />
      {!gameStarted &&
        <PreGame handleStartGame={handleStartGame} />
      }
      {gameStarted &&
        <Game />
      }
    </div>
  );
}

export default App;