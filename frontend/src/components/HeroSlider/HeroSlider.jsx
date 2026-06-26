import Slider from "react-slick";
import "./HeroSlider.css";

function HeroSlider() {

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const slides = [
    {
      image: "/images/slide1.jpg",
      title: "BUILT FOR MONSOON",
      subtitle: "Phantom Monsoon Rain Jacket",
      button: "Shop Now"
    },
    {
      image: "/images/slide2.jpg",
      title: "UPTO 30% OFF",
      subtitle: "Download GymX Apparel App",
      button: "Download App"
    },
    {
      image: "/images/slide3.jpg",
      title: "BEAT THE HEAT",
      subtitle: "Your Summer Jacket Is Here",
      button: "Limited Drop"
    }
  ];

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          <div
            className="hero-slide"
            style={{
              backgroundImage: `url(${slide.image})`
            }}
          >
            <div className="overlay">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <button>{slide.button}</button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default HeroSlider;