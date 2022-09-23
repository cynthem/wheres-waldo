import React from 'react';
import FoundBox from './FoundBox';

const Game = ({ handleCharFound, handleStopGame, clicked, handleClicked }) => {
    return (
        <div className='game' onClick={() => handleClicked()}>
            {clicked &&
                <FoundBox />
            }
        </div>
    )
}

export default Game;