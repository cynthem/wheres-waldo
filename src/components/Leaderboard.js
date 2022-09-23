import React from 'react';

const Leaderboard = ({ handleOpenLeader }) => {
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
                    <p>DATE</p>
                </div>
            </div>
        </div>
    )
}

export default Leaderboard;