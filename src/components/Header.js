import React from 'react';
import title from '../assets/title.png';

const Header = ({ characters }) => {
    return (
        <div className='header'>
            <div className='header-container'>
                <div className='header-characters'>
                    <div className='char-container'>
                        <img src={characters[0].src} alt="Waldo" />
                        <img src={characters[1].src} alt="Odlaw" />
                        <img src={characters[2].src} alt="Whitebeard" />
                    </div>
                    <div className='header-timer'>00m:00s</div>
                </div>
                <img className='header-title' src={title} alt="Where's Waldo?" />
            </div>
            <button className='header-leaderboard'>Leaderboard</button>
        </div>
    )
}

export default Header;