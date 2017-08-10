import React from 'react';
// import { Link } from 'react-router';
import '../styles/desktopNavBar.css';
import MainLogo from '../styles/zillow-logo.png';

const DesktopNavBar = (props) => {
    return (
        <header className="mainHeader">
            <img src={MainLogo} className='mainLogo' />
            <nav className="desktopNav">
                <a className="headerLink" to='/buy'>
                    <span className="buyLink">Buy</span>
                </a>
                <a className="headerLink" to='/rent'>
                    <span className="rentLink">Rent</span>
                </a>
                <a className="headerLink" to='/sell'>
                    <span className="sellLink">Sell</span>
                </a>
                <a className="headerLink" to='/mortgages'>
                    <span className="mortgagesLink">Mortgages</span>
                </a>
                <a className="headerLink" to='/agentfinder'>
                    <span className="agentFinderLink">Agent Finder</span>
                </a>
                <a className="headerLink" to='/homedesign'>
                    <span className="homeDesignLink">Home Design</span>
                </a>
                <a className="headerLink" to='/more'>
                    <span className="moreLink">More</span>
                </a>
            </nav>
        </header>
    )
}

export default DesktopNavBar; 