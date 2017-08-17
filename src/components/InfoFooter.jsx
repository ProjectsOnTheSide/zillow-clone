import React from 'react';
import '../styles/infoFooter.css';

const InfoFooter = (props) => {
    return (
        <div className='infoFooter'>
            <footer className='subFooter'>
                <div className='content'>
                    <div className='infoBox'>
                        <h6 className='boxHeader'>Real Estate</h6>
                        <ul className='infoList'>
                            <li className='listItem'>
                                <a href='#'>Browse all homes</a>
                            </li>
                            <li className='listItem'>
                                <a href='#'>Albuquerque real estate</a>
                            </li>
                            <li className='listItem'>
                                <a href='#'>Atlanta real estate</a>
                            </li>
                            <li className='listItem'>
                                <a href='#'>Austin real estate</a>
                            </li>
                            <li className='listItem'>
                                <a href='#'>Baltimore real estate</a>
                            </li>
                            <li className='listItem' id='more'>
                                <a href='#'>More</a>
                            </li>
                        </ul>
                    </div>
                    <div className='infoBox'>
                        <h6 className='boxHeader'>Rentals</h6>
                        <ul className='infoList'>
                            <li className='listItem'>
                                <a href='#'>Rental Buildings</a>
                            </li>
                            <li className='listItem'>
                                <a href='#'>Atlanta apartments for rent</a>
                            </li>
                            <li className='listItem'>
                                <a href='#'>Austin apartments for rent</a>
                            </li>
                            <li className='listItem'>
                                <a href='#'>Balitmore apartments for rent</a>
                            </li>
                            <li className='listItem'>
                                <a href='#'>Boston apartments for rent</a>
                            </li>
                            <li className='listItem' id='more'>
                                <a href='#'>More</a>
                            </li>
                        </ul>
                    </div>
                    <div className='infoBox'>
                        <h6 className='boxHeader'>Mortgage Rates</h6>
                        <ul className='infoList'>
                            <li className='listItem'>
                                <a href='#'>Current mortgage rates</a>
                            </li>
                            <li className='listItem'>
                                <a href='#'>Alaska mortgage rates</a>
                            </li>
                            <li className='listItem'>
                                <a href='#'>Alabama mortgage rates</a>
                            </li>
                            <li className='listItem'>
                                <a href='#'>Arkansas mortgage rates</a>
                            </li>
                            <li className='listItem'>
                                <a href='#'>Arizona mortgage rates</a>
                            </li>
                            <li className='listItem' id='more'>
                                <a href='#'>More</a>
                            </li>
                        </ul>
                    </div>
                    <div className='infoBox'>
                        <h6 className='boxHeader'>Browse Homes</h6>
                        <ul className='infolist'>
                            <li className='listItem'>
                                <a href='#'>California</a>
                            </li>
                            <li className='listItem'>
                                <a href='#'>Texas</a>
                            </li>
                            <li className='listItem'>
                                <a href='#'>New York</a>
                            </li>
                            <li className='listItem'>
                                <a href='#'>Florida</a>
                            </li>
                            <li className='listItem'>
                                <a href='#'>Illinois</a>
                            </li>
                            <li className='listItem' id='more'>
                                <a href='#'>More</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default InfoFooter;