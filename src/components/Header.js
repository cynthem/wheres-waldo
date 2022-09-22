import React from 'react';
import title from '../assets/wheresWaldo.jpg';
import waldo from '../assets/waldo.png';
import odlaw from '../assets/odlaw.png';
import whitebeard from '../assets/whitebeard.png';

const Header = () => {
    return (
        <div className='header'>
            <div className='header-characters'>
                <img src={waldo} alt="Waldo" />
                <img src={odlaw} alt="Odlaw" />
                <img src={whitebeard} alt="Whitebeard" />
            </div>
            <div className='header-timer'>00m:00s</div>
            <img className='header-title' src={title} alt="Where's Waldo?" />
            <button className='header-leaderboard'>Leaderboard</button>
        </div>
    )
}

export default Header;