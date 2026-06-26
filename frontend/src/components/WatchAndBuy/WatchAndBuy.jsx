import { useState } from 'react';
import Slider from 'react-slick';

import './WatchAndBuy.css';
import ReelModal from '../ReelModal/ReelModal';

function WatchAndBuy() {

  const [selectedReel, setSelectedReel] = useState(null);

  const reels = [
    {
      title: 'Women Shorts',
      price: '799',
      image:
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
      productImage:
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
      video:
        'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      title: 'Mock Neck Jacket',
      price: '999',
      image:
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
      productImage:
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
      video:
        'https://www.w3schools.com/html/movie.mp4'
    },
    {
      title: 'Printed Polo',
      price: '1199',
      image:
        'https://images.unsplash.com/photo-1506629905607-d9d0b5b1c7ef',
      productImage:
        'https://images.unsplash.com/photo-1506629905607-d9d0b5b1c7ef',
      video:
        'https://www.w3schools.com/html/mov_bbb.mp4'
    }
  ];

  const settings = {
    slidesToShow: 4,
    arrows: true,
    infinite: true
  };

  return (
    <section className="watch-buy">

      <h2>WATCH AND BUY</h2>

      <Slider {...settings}>

        {reels.map((reel, index) => (

          <div
            key={index}
            className="reel-card"
            onClick={() => setSelectedReel(reel)}
          >

            <img
              src={reel.image}
              alt=""
            />

            <div className="play-icon">
              ▶
            </div>

            <h3>{reel.title}</h3>

          </div>

        ))}

      </Slider>

      <ReelModal
        reel={selectedReel}
        onClose={() => setSelectedReel(null)}
      />

    </section>
  );
}

export default WatchAndBuy;