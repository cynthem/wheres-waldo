import React from 'react';

const PreGame = ({ handleStart }) => {
    return (
        <div className='pre-game'>
            <h2>Find Waldo, Odlaw, and Whitebeard in the shortest amount of time!</h2>
            <button 
                className='start-btn'
                onClick={() => handleStart()}
            >
                Begin Game
            </button>
        </div>
    )
}

export default PreGame;