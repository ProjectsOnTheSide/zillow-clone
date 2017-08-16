import React from 'react';
import '../styles/middleHomeSection.css';

const MiddleHomeSection = (props) => {
    return (
        <div className='mainContainer'>
            <div className='textTitle'>
                <h2 className='text'>Homes in your area</h2>
                <h3 className='homesAvailable'>10 homes in Provo</h3>
            </div>
        </div>
    )
}

export default MiddleHomeSection;