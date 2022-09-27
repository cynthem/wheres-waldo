import React from 'react';
import EndForm from './EndForm';
import EndMessage from './EndMessage';

const EndGame = (props) => {
    const formatTime = (time) => {
        const seconds = `0${(props.time % 60)}`.slice(-2);
        const findMin = `${Math.floor(props.time / 60)}`;
        const minutes = `0${(findMin)}`.slice(-2);
        const minute = minutes[1];
        const second = seconds[1];
        if (minutes === "00") {
            if (seconds === "02" || seconds === "03" || seconds === "04" || seconds === "05" || seconds === "06" || seconds === "07" || seconds === "08" || seconds === "09") {
                return `${second} seconds`;
            } else {
                return `${seconds} seconds`;
            }
        } else if (minutes === "01") {
            if (seconds === "00") {
                return `1 minute`;
            } else if (seconds === "01") {
                return `1 minute and 1 second`;
            } else if (seconds === "02" || seconds === "03" || seconds === "04" || seconds === "05" || seconds === "06" || seconds === "07" || seconds === "08" || seconds === "09") {
                return `1 minute and ${second} seconds`;
            } else {
                return `1 minute and ${seconds} seconds`;
            }
        } else if (minutes === "02" || minutes === "03" || minutes === "04" || minutes === "05" || minutes === "06" || minutes === "07" || minutes === "08" || minutes === "09") {
            if (seconds === "00") {
                return `${minute} minutes`;
            } else if (seconds === "01") {
                return `${minute} minutes and 1 second`;
            } else if (seconds === "02" || seconds === "03" || seconds === "04" || seconds === "05" || seconds === "06" || seconds === "07" || seconds === "08" || seconds === "09") {
                return `${minute} minutes and ${second} seconds`;
            } else {
                return `${minute} minutes and ${seconds} seconds`;
            }
        } else {
            if (seconds === "00") {
                return `${minutes} minutes`;
            } else if (seconds === "01") {
                return `${minutes} minutes and 1 second`;
            } else if (seconds === "02" || seconds === "03" || seconds === "04" || seconds === "05" || seconds === "06" || seconds === "07" || seconds === "08" || seconds === "09") {
                return `${minutes} minutes and ${second} seconds`;
            } else {
                return `${minutes} minutes and ${seconds} seconds`;
            }
        }
    }

    return (
        <div className='endgame'>
            <p className='end-text'>{`You found all three in ${formatTime(props.time)}!`}</p>
            {!props.nameSubmitted &&
                <EndForm handleFormSubmit={props.handleFormSubmit} />
            }
            {props.nameSubmitted &&
                <EndMessage playerName={props.playerName} />
            }
            <div className='end-btns'>
                <button 
                    className='end-leader-btn'
                    onClick={() => props.handleOpenLeader()}
                >
                    View Leaderboard
                </button>
                <button 
                    className='end-restart-btn'
                    onClick={() => props.handleResetGame()}
                >
                    Play Again
                </button>
            </div>
        </div>
    )
}

export default EndGame;