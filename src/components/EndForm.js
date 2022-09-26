import React from 'react';

const EndForm = ({ handleNameSubmitted, handleFormSubmit }) => {
    return (
        <form className='end-form' onSubmit={handleFormSubmit}>
            <input 
                className="end-input" 
                type="text" 
                placeholder="Enter name into leaderboard" 
                maxLength=""
                required 
            />
            <input 
                className='end-submit' 
                type="submit" 
                value="Submit" 
            />
        </form>
    )
}

export default EndForm;