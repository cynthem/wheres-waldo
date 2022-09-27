import React from 'react';
import Scores from './Scores';

const Leaderboard = ({ handleOpenLeader, highScores }) => {
    return (
        <div className='leaderboard'>
            <h2 className='leaderboard-title'>LEADERBOARD</h2>
            <div className='leaderboard-container'>
                <button 
                    className='leaderboard-close'
                    onClick={() => handleOpenLeader()}
                >
                    X
                </button>
                <div className='leaderboard-heading'>
                    <p className='leader-place'>PLACE</p>
                    <p className='leader-name'>NAME</p>
                    <p className='leader-time'>TIME</p>
                </div>
                <Scores highScores={highScores} />
            </div>
        </div>
    )
}

export default Leaderboard;