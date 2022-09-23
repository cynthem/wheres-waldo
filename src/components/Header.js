import React from 'react';
import Timer from './Timer';
import title from '../assets/title.png';

const Header = ({ characters, gameStarted, timerStarted, time, handleOpenLeader }) => {
    return (
        <div className='header'>
            <div className='header-container'>
                <div className='header-characters'>
                    <div className='char-container'>
                        <img 
                            src={!characters[0].found ? characters[0].unfoundSrc : characters[0].foundSrc} 
                            alt="Waldo"
                        />
                        <img 
                            src={!characters[1].found ? characters[1].unfoundSrc : characters[1].foundSrc} 
                            alt="Odlaw"
                        />
                        <img 
                            src={!characters[2].found ? characters[2].unfoundSrc : characters[2].foundSrc} 
                            alt="Whitebeard"
                        />
                    </div>
                    {!gameStarted &&
                        <div className='header-timer'>00m:00s</div>
                    }
                    {gameStarted &&
                        <Timer 
                            timerStarted={timerStarted}
                            time={time} 
                        />
                    }
                </div>
                <img className='header-title' src={title} alt="Where's Waldo?" />
            </div>
            <button 
                className='header-leaderboard'
                onClick={() => handleOpenLeader()}
            >
                Leaderboard
            </button>
        </div>
    )
}

export default Header;