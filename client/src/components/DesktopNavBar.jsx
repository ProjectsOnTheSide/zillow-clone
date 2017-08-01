import React from 'react';
import { Link } from 'react-router';

const DesktopNavBar = (props) => {
    return (
        <header className="mainHeader">
            <a href="#" /> //This will be the zillow logo on the left of nav bar
            <nav className="desktopNav">
                <Link className="headerLink" to='/buy'>
                    <span className="buyLink">Buy</span>
                </Link>
                <Link className="headerLink" to='/rent'>
                    <span className="rentLink">Rent</span>
                </Link>
                <Link className="headerLink" to='/sell'>
                    <span className="sellLink">Sell</span>
                </Link>
                <Link className="headerLink" to='/mortgages'>
                    <span className="mortgagesLink">Mortgages</span>
                </Link>
                <Link className="headerLink" to='/agentfinder'>
                    <span className="agentFinderLink">Agent Finder</span>
                </Link>
                <Link className="headerLink" to='/homedesign'>
                    <span className="homeDesignLink">Home Design</span>
                </Link>
                <Link className="headerLink" to='/more'>
                    <span className="moreLink">More</span>
                </Link>
            </nav>
        </header>
    )
}

export defualt DesktopNavBar; 