import React, { useState, useRef } from 'react';
import Header from './components/Header';
import PreGame from './components/PreGame';
import Game from './components/Game';
import Leaderboard from './components/Leaderboard';
import charList from './helpers/charList';
import gameImage from './assets/wheresWaldo.jpg';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const [time, setTime] = useState(null);
  const [characters, setCharacters] = useState(charList);
  const [clicked, setClicked] = useState(false);
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

  const handleClicked = () => {
    setClicked(!clicked);
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
    setLeaderOpen(!leaderOpen);
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
          clicked={clicked}
          handleClicked={handleClicked}
        />
      }
      {leaderOpen &&
        <Leaderboard handleOpenLeader={handleOpenLeader} />
      }
      <img 
        className="game-image"
        src={gameImage}
        alt="Where's Waldo"
        useMap="#game-map"
      />
      <map name="game-map">
        <area 
          id="waldo"
          alt="waldo"
          shape="rect"
          coords="570,566,590,605"
        />
        <area 
          id="odlaw"
          alt="odlaw"
          shape="rect"
          coords="90,630,115,660"
        />
        <area 
          id="whitebeard"
          alt="whitebeard"
          shape="rect"
          coords="1115,520,1135,560"
        />
      </map>
    </div>
  );
}

export default App;