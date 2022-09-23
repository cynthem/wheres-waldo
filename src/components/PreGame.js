import React from 'react';

const PreGame = ({ handleStartGame }) => {
    return (
        <div className='pre-game'>
            <h2>Find Waldo, Odlaw, and Whitebeard in the shortest amount of time!</h2>
            <button 
                className='start-btn'
                onClick={() => handleStartGame()}
            >
                Begin Game
            </button>
        </div>
    )
}

export default PreGame;