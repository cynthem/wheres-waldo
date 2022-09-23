import React, { useState } from 'react';
import Header from './components/Header';
import PreGame from './components/PreGame';
import Game from './components/Game';
import charList from './helpers/charList';

function App() {
  const [characters, setCharacters] = useState(charList);
  const [isStarted, setIsStarted] = useState(false);
  const [timerOn, setTimerOn] = useState(false);
  const [time, setTime] = useState(0);

  const handleStart = () => {
    setIsStarted(true);
    //setTimerOn(true);
  }

  const handleFoundChar = (id) => {
    const foundChar = characters.map((char) => {
      if (char.id === id) {
        char.found = true;
      }
      return characters;
    });
    setCharacters({ characters: foundChar });
  }

  return (
    <div className="App">
      <Header 
        characters={characters}
        handleStart={handleStart}
        handleFoundChar={handleFoundChar}
        timerOn={timerOn}
      />
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