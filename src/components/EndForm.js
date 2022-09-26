import React from 'react';

const EndForm = () => {
    return (
        <form className='end-form'>
            <input className="end-input" type="text" placeholder="Enter name into leaderboard" required />
            <input className='end-submit' type="submit" value="Submit" />
        </form>
    )
}

export default EndForm;