import React from 'react';
import Slider from 'react-slick';
import './Home.css';
import CollectionGrid from '../components/CollectionGrid/CollectionGrid';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import VideoSection from '../components/VideoSection/VideoSection';
import ReviewsSlider from '../components/ReviewsSlider/ReviewsSlider';
import WatchAndBuy from '../components/WatchAndBuy/WatchAndBuy';


function Home() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };

  return (
    
  <>
    <Slider {...settings}>
      <div>
        <div
          className="hero-slide"
          style={{
            backgroundImage:
              "url('/images/pexels-rahulp9800-27255129.jpg')"
          }}
        >
          <div className="overlay">
            <h1>BUILT FOR MONSOON</h1>
            <p>PHANTOM MONSOON RAIN JACKET</p>
            <button>Shop Now</button>
          </div>
        </div>
      </div>

      <div>
        <div
          className="hero-slide"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80')"
          }}
        >
          <div className="overlay">
            <h1>UPTO 30% OFF</h1>
            <p>DOWNLOAD GYMWEAR APP</p>
            <button>Download App</button>
          </div>
        </div>
      </div>

      <div>
        <div
          className="hero-slide"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80')"
          }}
        >
          <div className="overlay">
            <h1>BEAT THE HEAT</h1>
            <p>SUMMER COLLECTION IS HERE</p>
            <button>Limited Drop</button>
          </div>
        </div>
      </div>
    </Slider>

    <ProductGrid />
    <CollectionGrid />
    <VideoSection />
    <ReviewsSlider />
    <WatchAndBuy />
  </>
);

}

export default Home;