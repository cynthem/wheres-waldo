import React from 'react';

const FoundBox = ({ coords, finding, handleFinding }) => {
    const style = {
        left: coords.x,
        top: coords.y
    }

    return (
        <div className='foundbox' style={style}>
            <p 
                className='waldo'
                onClick={(e) => handleFinding(e)}
            >
                Waldo
            </p>
            <p 
                className='odlaw'
                onClick={(e) => handleFinding(e)}
            >
                Odlaw
            </p>
            <p 
                className='whitebeard'
                onClick={(e) => handleFinding(e)}
            >
                Whitebeard
            </p>
        </div>
    )
}

export default FoundBox;