import React from 'react';
import { Link } from 'react-router';
import '../styles/main.css';
import '../styles/home.css';

const Home = (props) => {
    //Probably need to pass down image from api or amazon on props and set image here
    return (
        <div className='homeContainer'>
            <div className='videoSection'>
                <section className='searchBox'>
                    <header className='searchBoxHeader'>
                        <h1>Find your way home</h1>
                    </header>
                    <div className='searchBody'>
                        <button className='buy'>
                            <h6>Buy</h6>
                        </button>
                        <button className='rent'>
                            <h6>Rent</h6>
                        </button>
                        <button className='sell'>
                            <h6>Sell</h6>
                        </button>
                        <button className='zestimate'>
                            <h6>Zestimate</h6>
                        </button>
                        <div className='searchInputAndButton'>
                            <input placeholder='Enter an address, neighborhood, city or ZIP code' className='searchInput' />
                            <button className='searchButton'>
                                <h5>Search</h5>
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home;