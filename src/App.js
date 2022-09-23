import React, { useState, useRef } from 'react';
import Header from './components/Header';
import PreGame from './components/PreGame';
import Game from './components/Game';
import Leaderboard from './components/Leaderboard';
import charList from './helpers/charList';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const [time, setTime] = useState(null);
  const [characters, setCharacters] = useState(charList);
  const [leaderOpen, setLeaderOpen] = useState(false);
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

  const handleCharFound = (id) => {
    const updatedList = characters((char) => {
      if (characters.id === id) {
        characters.found = true;
      }
      return characters;
    });
    setCharacters(updatedList);
  }
  
  const handleOpenLeader = () => {
    if (leaderOpen) {
      setLeaderOpen(false);
    } else {
      setLeaderOpen(true);
    }
  }

  return (
    <div className="App">
      <Header 
        gameStarted={gameStarted}
        timerStarted={timerStarted}
        time={time}
        characters={characters}
        handleOpenLeader={handleOpenLeader}
      />
      {!gameStarted &&
        <PreGame handleStartGame={handleStartGame} />
      }
      {gameStarted &&
        <Game 
          handleCharFound={handleCharFound}
          handleStopGame={handleStopGame}
        />
      }
      {leaderOpen &&
        <Leaderboard handleOpenLeader={handleOpenLeader} />
      }
    </div>
  );
}

export default App;