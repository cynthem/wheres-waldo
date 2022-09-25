import React from 'react';

const ResultsBox = ({ results }) => {
    return (
        <div className='resultsbox'>
            <p className='text-top'>{results.top}</p>
            <p className='text-bottom'>{results.bottom}</p>
        </div>
    )
}

export default ResultsBox;