import React from 'react';
import uniqid from 'uniqid';

const Scores = ({ highScores }) => {
    const formatTimes = (timing) => {
        const seconds = `0${(timing % 60)}`.slice(-2);
        const findMin = `${Math.floor(timing / 60)}`;
        const minutes = `0${(findMin)}`.slice(-2);
        return `${minutes}:${seconds}`;
    }

    return (
        <div className='leaderboard-results'>
            {highScores.map((score, index) => 
                <div className='leader-result' key={uniqid()}>
                    <p className='player-place'>{index + 1}</p>
                    <p className='player-name'>{score.player}</p>
                    <p className='player-time'>{formatTimes(score.timing)}</p>
                </div>
            )}
        </div>
    )
}

export default Scores;