import React, { useEffect } from 'react';

const EndMessage = ({ playerName }) => {
    useEffect(() => {
        
    }, []);

    return (
        <div className='end-message'>
            <p className='end-msg-text'>{`Great work, ${playerName}!`}</p>
        </div>
    )
}

export default EndMessage;