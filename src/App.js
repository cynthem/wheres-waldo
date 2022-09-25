import React, { useState, useRef } from 'react';
import Header from './components/Header';
import PreGame from './components/PreGame';
import Leaderboard from './components/Leaderboard';
import FoundBox from './components/FoundBox';
import charList from './helpers/charList';
import gameImage from './assets/wheresWaldo.jpg';
import cursor from './assets/cursor.svg';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const [time, setTime] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [coords, setCoords] = useState({ x: null, y: null });
  const [finding, setFinding] = useState(null);
  const [foundCount, setFoundCount] = useState(0);
  const [waldoSrc, setWaldoSrc] = useState(charList[0].unfoundSrc);
  const [odlawSrc, setOdlawSrc] = useState(charList[1].unfoundSrc);
  const [whiteSrc, setWhiteSrc] = useState(charList[2].unfoundSrc);
  const [charFound, setCharFound] = useState({ waldo: 'none', odlaw: 'none', white: 'none' });
  const [leaderOpen, setLeaderOpen] = useState(false);
  const timerRef = useRef(null);

  const handleStartGame = () => {
    setGameStarted(true);
    setTimerStarted(true);
    timerRef.current = setInterval(() => {
      setTime(time => time + 1)
    }, 1000);
    const gameImage = document.querySelector('.game-image');
    gameImage.style.cursor = `url(${cursor}) 50 50, auto`;
  }

  const handleStopGame = () => {
    setTimerStarted(false);
    clearInterval(timerRef.current);
    const gameImage = document.querySelector('.game-image');
    gameImage.style.cursor = 'default';
  }

  const handleClicked = (e) => {
    setClicked(!clicked);
    const xCoord = e.clientX + 50;
    const yCoord = e.clientY - 100;
    setCoords({ x: xCoord, y: yCoord });
    setFinding(e.target.id);
  }

  const handleFinding = (e) => {
    if (e.target.className.includes('waldo') && finding === 'waldo') {
      setWaldoSrc(charList[0].foundSrc);
      setFoundCount(foundCount + 1);
      handleCharFound('waldo');
      if (foundCount === 3) {
        handleStopGame();
      }
    } else if (e.target.className.includes('odlaw') && finding === 'odlaw') {
      setOdlawSrc(charList[1].foundSrc);
      setFoundCount(foundCount + 1);
      handleCharFound('odlaw');
      if (foundCount === 3) {
        handleStopGame();
      }
    } else if (e.target.className.includes('whitebeard') && finding === 'whitebeard') {
      setWhiteSrc(charList[2].foundSrc);
      setFoundCount(foundCount + 1);
      handleCharFound('whitebeard');
      if (foundCount === 3) {
        handleStopGame();
      }
    } else {

    }
  }

  const handleCharFound = (character) => {
    if (character === 'waldo') {
      setCharFound(charFound.waldo = "line-through");
    }
    if (character === 'odlaw') {
      setCharFound(charFound.odlaw = "line-through");
    }
    if (character === 'whitebeard') {
      setCharFound(charFound.white = "line-through");
    }
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
        handleOpenLeader={handleOpenLeader}
        waldoSrc={waldoSrc}
        odlawSrc={odlawSrc}
        whiteSrc={whiteSrc}
      />
      {leaderOpen &&
        <Leaderboard handleOpenLeader={handleOpenLeader} />
      }
      {!gameStarted &&
        <PreGame handleStartGame={handleStartGame} />
      }
      <img 
        className="game-image"
        src={gameImage}
        alt="Where's Waldo"
        useMap="#game-map"
        onClick={(e) => handleClicked(e)}
      />
      <map name="game-map">
        <area 
          id="waldo"
          alt="waldo"
          shape="rect"
          coords="570,566,590,605"
          onClick={(e) => handleClicked(e)}
        />
        <area 
          id="odlaw"
          alt="odlaw"
          shape="rect"
          coords="90,630,115,660"
          onClick={(e) => handleClicked(e)}
        />
        <area 
          id="whitebeard"
          alt="whitebeard"
          shape="rect"
          coords="1115,520,1135,560"
          onClick={(e) => handleClicked(e)}
        />
      </map>
      {clicked &&
        <FoundBox 
          coords={coords}
          charFound={charFound}
          handleFinding={handleFinding}
        />
      }
    </div>
  );
}

export default App;