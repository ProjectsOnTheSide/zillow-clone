import React from 'react';
// import { Link } from 'react-router';
import '../styles/main.css';
import '../styles/home.css';

const Home = (props) => {
    //Probably need to pass down image from api or amazon on props and set image here
    return (
        <div className='homeContainer'>
            <div className='videoSection'>
                <header className='searchBoxHeader'>
                    <h1>Find your way home</h1>
                </header>
                <section className='searchBox'>
                    <div className='searchBody'>
                        <label className='buy'>Buy</label>
                        <label className='rent'>Rent</label>
                        <label className='sell'>Sell</label>
                        <label className='zestimate'>Zestimate</label>
                    </div>
                    <div className='searchInputAndButton'>
                        <input placeholder='Enter an address, neighborhood, city or ZIP code' className='searchInput' type='text' />
                        <button className='searchButton' type='submit'>
                            <h5 className='searchBtnText'>Search</h5>
                        </button>
                    </div>
                </section>
            </div>
            <div className='editHomeFact'>
                <div className='updateText'>
                    <h3 className='homeFacts'>Edit your home facts</h3>
                    <h4 className='updateDetails'>Update home details faction into your Zestimate.</h4>
                </div>
                <button className='getStarted'>Get started</button>
            </div>
        </div>
    )
}

export default Home;