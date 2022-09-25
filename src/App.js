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
  const [leaderOpen, setLeaderOpen] = useState(false);
  const timerRef = useRef(null);
  const [waldoFound, setWaldoFound] = useState({
    src: charList[0].unfoundSrc,
    textDeco: 'none',
    color: 'white',
    cursor: 'pointer'
  });
  const [odlawFound, setOdlawFound] = useState({
    src: charList[1].unfoundSrc,
    textDeco: 'none',
    color: 'white',
    cursor: 'pointer'
  });
  const [whitebeardFound, setWhitebeardFound] = useState({
    src: charList[2].unfoundSrc,
    textDeco: 'none',
    color: 'white',
    cursor: 'pointer'
  });

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
    handleFinding(e);
  }

  const handleFinding = (e) => {
    if (e.target.className.includes('waldo') && finding === 'waldo') {
      setFoundCount(foundCount + 1);
      setWaldoFound(prevwaldoFound => ({
        ...prevwaldoFound,
        src: charList[0].foundSrc,
        textDeco: "line-through",
        color: "gray", 
        cursor: "default"
      }));
      if (foundCount === 3) {
        handleStopGame();
      }
    } else if (e.target.className.includes('odlaw') && finding === 'odlaw') {
      setFoundCount(foundCount + 1);
      setOdlawFound(prevodlawFound => ({
        ...prevodlawFound,
        src: charList[1].foundSrc,
        textDeco: "line-through",
        color: "gray", 
        cursor: "default"
      }));
      if (foundCount === 3) {
        handleStopGame();
      }
    } else if (e.target.className.includes('whitebeard') && finding === 'whitebeard') {
      setFoundCount(foundCount + 1);
      setWhitebeardFound(prevwhitebeardFound => ({
        ...prevwhitebeardFound,
        src: charList[2].foundSrc,
        textDeco: "line-through",
        color: "gray", 
        cursor: "default"
      }));
      if (foundCount === 3) {
        handleStopGame();
      }
    } else {

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
        waldoFound={waldoFound}
        odlawFound={odlawFound}
        whitebeardFound={whitebeardFound}
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
          waldoFound={waldoFound}
          odlawFound={odlawFound}
          whitebeardFound={whitebeardFound}
          handleFinding={handleFinding}
        />
      }
    </div>
  );
}

export default App;