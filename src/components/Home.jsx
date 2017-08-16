import React from 'react';
// import { Link } from 'react-router';
import Slider from 'react-slick';
import '../styles/main.css';
import '../styles/home.css';

const Home = (props) => {
    //Probably need to pass down image from api or amazon on props and set image here
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode: true,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };
    return (
        <div>
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
        <div>
        <Slider 
                {...settings}
                >
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
                <div><h3>5</h3></div>
                <div><h3>6</h3></div>
                </Slider>
        </div>
        </div>
    )
}

export default Home;