import React from 'react';
import '../styles/middleHomeSection.css';
import Slider from 'react-slick';

const MiddleHomeSection = (props) => {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    //   centerMode: true,
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
            <div className='mainContainer'>
                <div className='textTitle'>
                    <h2 className='text'>Homes in your area</h2>
                    <h3 className='homesAvailable'>10 homes in Provo</h3>
                </div>
                <Slider {...settings}>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                    <div><h3>5</h3></div>
                    <div><h3>6</h3></div>
                </Slider>
                <div className='seeMoreContainer'>
                    <button className='seeMoreListing'>See more listings</button>
                </div>
            </div>
            <div className='mainContainer'>
                <div className='textTitle'>
                    <h2 className='text'>Most expensive</h2>
                    <h3 className='highestPriced'>The highest priced listings in Provo</h3>
                </div>
                <Slider {...settings}>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                    <div><h3>5</h3></div>
                    <div><h3>6</h3></div>
                </Slider>
                <div className='seeMoreContainer'>
                    <button className='seeMoreListing'>See more listings</button>
                </div>
            </div>
            <div className='mainContainer'>
                <div className='textTitle'>
                    <h2 className='text'>Largest homes</h2>
                    <h3 className='mostSquareFootage'>Provo listings with the most square footage</h3>
                </div>
            <Slider {...settings}>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                    <div><h3>5</h3></div>
                    <div><h3>6</h3></div>
                </Slider>
                <div className='seeMoreContainer'>
                    <button className='seeMoreListing'>See more listings</button>
                </div>
            </div>
            <div className='mainContainer'>
                <div className='textTitle'>
                    <h2 className='text'>Most recently built</h2>
                    <h3 className='mostRecent'>The most recently built homes in Provo</h3>
                </div>
            <Slider {...settings}>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                    <div><h3>5</h3></div>
                    <div><h3>6</h3></div>
                </Slider>
                <div className='seeMoreContainer'>
                    <button className='seeMoreListing'>See more listings</button>
                </div>
            </div>
        </div>
    )
}

export default MiddleHomeSection;