import React, { useState } from 'react';
import Header from './components/Header';
import Game from './components/Game';

function App() {
  const [isStarted, setIsStarted] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
  }

  return (
    <div className="App">
      <Header />
      <Game />
    </div>
  );
}

export default App;