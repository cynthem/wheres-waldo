import React from 'react';

const EndMessage = ({ playerName }) => {
    return (
        <div className='end-message'>
            <p className='end-msg-text'>{`Great work, ${playerName}!`}</p>
        </div>
    )
}

export default EndMessage;