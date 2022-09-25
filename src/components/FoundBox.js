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

    const odlawStyle = {
        textDecoration: props.odlawFound.textDeco,
        color: props.odlawFound.color,
        cursor: props.odlawFound.cursor
    };

    const whitebeardStyle = {
        textDecoration: props.whitebeardFound.textDeco,
        color: props.whitebeardFound.color,
        cursor: props.whitebeardFound.cursor
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
                style={odlawStyle}
                onClick={(e) => props.handleFinding(e)}
            >
                Odlaw
            </p>
            <p 
                className='whitebeard'
                style={whitebeardStyle}
                onClick={(e) => props.handleFinding(e)}
            >
                Whitebeard
            </p>
        </div>
    )
}

export default FoundBox;