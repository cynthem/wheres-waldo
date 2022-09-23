import React from 'react';

const Timer = ({ timerStarted, time }) => {
    const formatTime = (time) => {
        const seconds = `0${(time % 60)}`.slice(-2);
        const findMin = `${Math.floor(time / 60)}`;
        const minutes = `0${(findMin)}`.slice(-2);
        return `${minutes}m:${seconds}s`;
    }

    return (
        <>
            {!timerStarted &&
                <div className='header-timer'>00m:00s</div>
            }
            {timerStarted &&
                <div className='header-timer'>{formatTime(time)}</div>
            }
        </>
    )
}

export default Timer;