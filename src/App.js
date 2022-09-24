import React, { useState, useEffect, useRef } from 'react';
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
  const [characters, setCharacters] = useState(charList);
  const [clicked, setClicked] = useState(false);
  const [coords, setCoords] = useState({ x: null, y: null });
  const [finding, setFinding] = useState(null);
  const [leaderOpen, setLeaderOpen] = useState(false);
  const [waldoSrc, setWaldoSrc] = useState(characters[0].unfoundSrc);
  const [odlawSrc, setOdlawSrc] = useState(characters[1].unfoundSrc);
  const [whiteSrc, setWhiteSrc] = useState(characters[2].unfoundSrc);
  const timerRef = useRef(null);

  useEffect(() => {
    if (characters[0].found) {
        setWaldoSrc(characters[0].foundSrc)
    }
    if (characters[1].found) {
        setOdlawSrc(characters[1].foundSrc)
    }
    if (characters[2].found) {
        setWhiteSrc(characters[2].foundSrc)
    }
  }, [characters]);

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
      setCharacters(characters[0].found = true);
      console.log('success')
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
        characters={characters}
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
          finding={finding}
          handleFinding={handleFinding}
        />
      }
    </div>
  );
}

export default App;