import React from 'react';

const EndForm = ({ handleNameSubmitted, handleFormSubmit }) => {
    return (
        <form className='end-form' onSubmit={handleFormSubmit}>
            <input 
                className="end-input" 
                type="text" 
                placeholder="Enter name into leaderboard" 
                required 
            />
            <input 
                className='end-submit' 
                type="submit" 
                value="Submit" 
                onClick={() => handleNameSubmitted()}
            />
        </form>
    )
}

export default EndForm;