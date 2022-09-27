import React, { useState, useEffect, useRef } from 'react';
import { db } from './firebase';
import Header from './components/Header';
import PreGame from './components/PreGame';
import Leaderboard from './components/Leaderboard';
import FoundBox from './components/FoundBox';
import ResultsBox from './components/ResultsBox';
import EndGame from './components/EndGame';
import charList from './helpers/charList';
import gameImage from './assets/wheresWaldo.jpg';
import cursor from './assets/cursor.svg';

function App() {
  const intialWaldo = {
    src: charList[0].unfoundSrc,
    textDeco: 'none',
    color: 'white',
    cursor: 'pointer'
  };

  const initialOdlaw = {
    src: charList[1].unfoundSrc,
    textDeco: 'none',
    color: 'white',
    cursor: 'pointer'
  };

  const initialWhitebeard = {
    src: charList[2].unfoundSrc,
    textDeco: 'none',
    color: 'white',
    cursor: 'pointer'
  };

  const initialScores = [];

  const [gameStarted, setGameStarted] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const [time, setTime] = useState(null);
  const timerRef = useRef(null);
  const [clicked, setClicked] = useState(false);
  const [coords, setCoords] = useState({ x: null, y: null });
  const [finding, setFinding] = useState(null);
  const [foundCount, setFoundCount] = useState(1);
  const [waldoFound, setWaldoFound] = useState(intialWaldo);
  const [odlawFound, setOdlawFound] = useState(initialOdlaw);
  const [whitebeardFound, setWhitebeardFound] = useState(initialWhitebeard);
  const [resultsOpen, setResultsOpen] = useState(false);
  const [results, setResults] = useState({ top: "", bottom: "" });
  const [win, setWin] = useState(false);
  const [nameSubmitted, setNameSubmitted] = useState(false);
  const [playerName, setPlayerName] = useState(null);
  const [highScores, setHighScores] = useState(initialScores);
  const [leaderOpen, setLeaderOpen] = useState(false);
  
  const handleStartGame = () => {
    setGameStarted(true);
    setTimerStarted(true);
    timerRef.current = setInterval(() => {
      setTime(time => time + 1);
    }, 1000);
    const gameImage = document.querySelector('.game-image');
    gameImage.style.cursor = `url(${cursor}) 50 50, auto`;
  }

  const handleStopGame = () => {
    clearInterval(timerRef.current);
    setResultsOpen(false);
    setWin(true);
    const gameImage = document.querySelector('.game-image');
    gameImage.style.cursor = 'default';
  }

  const handleResetGame = () => {
    //setTimerStarted(false);
    setTime(null);
    setFoundCount(1);
    setWaldoFound(intialWaldo);
    setOdlawFound(initialOdlaw);
    setWhitebeardFound(initialWhitebeard);
    setWin(false);
    setNameSubmitted(false);
    setPlayerName(null);
    handleStartGame();
  }

  const handleClicked = (e) => {
    setClicked(!clicked);
    setResultsOpen(false);
    const xCoord = e.clientX + 50;
    const yCoord = e.clientY - 100;
    setCoords({ x: xCoord, y: yCoord });
    setFinding(e.target.id);
  }

  const handleFinding = (e) => {
    if (e.target.className.includes('waldo') && finding === 'waldo') {
      setFoundCount(prevfoundCount => prevfoundCount + 1);
      setWaldoFound(prevwaldoFound => ({
        ...prevwaldoFound,
        src: charList[0].foundSrc,
        textDeco: "line-through",
        color: "gray", 
        cursor: "default"
      }));
      setResults(prevresults => ({
        ...prevresults,
        top: "You found",
        bottom: "Waldo!"
      }));
      setResultsOpen(true);
      window.setTimeout(() => {
        setClicked(false);
        if (foundCount === 3) {
          handleStopGame();
        }
      }, 1000);
    } else if (e.target.className.includes('odlaw') && finding === 'odlaw') {
      setFoundCount(prevfoundCount => prevfoundCount + 1);
      setOdlawFound(prevodlawFound => ({
        ...prevodlawFound,
        src: charList[1].foundSrc,
        textDeco: "line-through",
        color: "gray", 
        cursor: "default"
      }));
      setResults(prevresults => ({
        ...prevresults,
        top: "You found",
        bottom: "Odlaw!"
      }));
      setResultsOpen(true);
      window.setTimeout(() => {
        setClicked(false);
        if (foundCount === 3) {
          handleStopGame();
        }
      }, 1000);
    } else if (e.target.className.includes('whitebeard') && finding === 'whitebeard') {
      setFoundCount(prevfoundCount => prevfoundCount + 1);
      setWhitebeardFound(prevwhitebeardFound => ({
        ...prevwhitebeardFound,
        src: charList[2].foundSrc,
        textDeco: "line-through",
        color: "gray", 
        cursor: "default"
      }));
      setResults(prevresults => ({
        ...prevresults,
        top: "You found",
        bottom: "Whitebeard!"
      }));
      setResultsOpen(true);
      window.setTimeout(() => {
        setClicked(false);
        if (foundCount === 3) {
          handleStopGame();
        }
      }, 1000);
    } else {
      setResults(prevresults => ({
        ...prevresults,
        top: "Nothing there.",
        bottom: "Better luck next time!"
      }));
      setResultsOpen(true);
      setClicked(false);
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const input = document.querySelector('.end-input');
    setPlayerName(input.value);
    setNameSubmitted(true);
  }

  const handleOpenLeader = () => {
    setLeaderOpen(!leaderOpen);
  }

  const saveData = () => {
    db.collection("scores").add({
      player: playerName,
      timing: time
    }).then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    }).catch(function (error) {
      console.error("Error adding document: ", error);
    });
  }

  const getData = () => {
    let dbScores = [];
    db.collection("scores")
      .orderBy("timing", "asc")
      .limit(20)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dbScores.push(doc.data());
        });
      });
    setHighScores(dbScores);
  }

  useEffect(() => {
    if (playerName) {
      saveData();
    }
  }, [playerName]);

  useEffect(() => {
    if (playerName) {
      getData();
    }
  }, [playerName]);

  useEffect(() => {
    getData();
  }, []);

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
        <Leaderboard 
          handleOpenLeader={handleOpenLeader}
          highScores={highScores} 
        />
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
      {resultsOpen &&
        <ResultsBox results={results} />
      }
      {win &&
        <EndGame 
          time={time}
          nameSubmitted={nameSubmitted}
          playerName={playerName}
          handleFormSubmit={handleFormSubmit}
          saveData={saveData}
          handleOpenLeader={handleOpenLeader} 
          handleResetGame={handleResetGame}
        />
      }
    </div>
  );
}

export default App;