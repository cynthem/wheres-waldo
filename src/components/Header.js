import React from 'react';
import Timer from './Timer';
import title from '../assets/title.png';

const Header = (props) => {
    return (
        <div className='header'>
            <div className='header-container'>
                <div className='header-characters'>
                    <div className='char-container'>
                        <img src={props.waldoFound.src} alt="Waldo" />
                        <img src={props.odlawSrc} alt="Odlaw" />
                        <img src={props.whiteSrc} alt="Whitebeard" />
                    </div>
                    {!props.gameStarted &&
                        <div className='header-timer'>00m:00s</div>
                    }
                    {props.gameStarted &&
                        <Timer 
                            timerStarted={props.timerStarted}
                            time={props.time} 
                        />
                    }
                </div>
                <img className='header-title' src={title} alt="Where's Waldo?" />
            </div>
            <button 
                className='header-leaderboard'
                onClick={() => props.handleOpenLeader()}
            >
                Leaderboard
            </button>
        </div>
    )
}

export default Header;