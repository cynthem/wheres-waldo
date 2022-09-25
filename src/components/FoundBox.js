import React from 'react';

const FoundBox = (props) => {
    const placement = {
        left: props.coords.x,
        top: props.coords.y
    };

    const waldoStyle = {
        textDecoration: props.waldoFound.textDeco,
        color: props.waldoFound.color,
        cursor: props.waldoFound.cursor
    };

    const odlawText = {
        textDecoration: props.charFound.odlaw
    };

    const whitebeardText = {
        textDecoration: props.charFound.white
    };

    return (
        <div className='foundbox' style={placement}>
            <p 
                className='waldo'
                style={waldoStyle}
                onClick={(e) => props.handleFinding(e)}
            >
                Waldo
            </p>
            <p 
                className='odlaw'
                style={odlawText}
                onClick={(e) => props.handleFinding(e)}
            >
                Odlaw
            </p>
            <p 
                className='whitebeard'
                style={whitebeardText}
                onClick={(e) => props.handleFinding(e)}
            >
                Whitebeard
            </p>
        </div>
    )
}

export default FoundBox;