import React from 'react';

const EndForm = ({ handleDataSubmit, handleFormSubmit }) => {
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
                onClick={() => handleFormSubmit()}
            />
        </form>
    )
}

export default EndForm;