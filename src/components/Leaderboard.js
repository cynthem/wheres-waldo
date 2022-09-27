import React from 'react';

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
                    <p>PLACE</p>
                    <p>NAME</p>
                    <p>TIME</p>
                </div>
                <div className='leaderboard-results'>
                    {highScores.map((score, index) => 
                        <div className='leader-result'>
                            <p className='leader-place'>{index + 1}</p>
                            <p className='leader-name'>{score.player}</p>
                            <p className='leader-time'>{score.timing}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Leaderboard;