import React from 'react';

const FoundBox = ({ coords }) => {
    const style = {
        left: coords.x,
        top: coords.y
    }

    return (
        <div className='foundbox' style={style}>
            <p>Waldo</p>
            <p>Odlaw</p>
            <p>Whitebeard</p>
        </div>
    )
}

export default FoundBox;