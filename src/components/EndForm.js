import React from 'react';

const EndForm = ({ handleDataSubmit }) => {
    return (
        <form className='end-form'>
            <input 
                className="end-input" 
                type="text" 
                placeholder="Enter name into leaderboard" 
                maxLength=""
                required 
                onChange={(e) => handleDataSubmit(e)}
            />
            <input 
                className='end-submit' 
                type="submit" 
                value="Submit" 
                onClick={}
            />
        </form>
    )
}

export default EndForm;