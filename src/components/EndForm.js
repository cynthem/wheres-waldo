import React from 'react';

const EndForm = ({ handleFormSubmit }) => {
    return (
        <form className='end-form' onSubmit={(e) => handleFormSubmit(e)}>
            <input 
                className="end-input" 
                type="text" 
                placeholder="Enter name into leaderboard" 
                maxLength="15"
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