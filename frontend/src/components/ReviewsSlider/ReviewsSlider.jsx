import Slider from "react-slick";
import "./ReviewsSlider.css";

function SampleNextArrow(props) {
  const { onClick } = props;

  return (
    <div
      className="custom-arrow next-arrow"
      onClick={onClick}
    >
      ❯
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;

  return (
    <div
      className="custom-arrow prev-arrow"
      onClick={onClick}
    >
      ❮
    </div>
  );
}





function ReviewsSlider() {

  const reviews = [
    {
      name: "Ashutosh Gaikwad",
      date: "June 19 2026",
      review: "Excellent quality gym wear."
    },
    {
      name: "Rana Karnail",
      date: "June 19 2026",
      review: "Very comfortable products."
    },
    {
      name: "RISHI KHATRI",
      date: "June 19 2026",
      review: "Amazing fabric quality."
    },
    {
      name: "Deepak Khabole",
      date: "June 16 2026",
      review: "Worth every rupee."
    },
    {
      name: "Chand Faridi",
      date: "June 15 2026",
      review: "Excellent."
    },
    {
  name: "Rahul",
  date: "June 14 2026",
  review: "Awesome products"
},
{
  name: "Aman",
  date: "June 13 2026",
  review: "Very good quality"
},
{
  name: "Vikas",
  date: "June 12 2026",
  review: "Loved it"
}
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
      arrows: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
  };

  return (
    <section className="reviews-section">

      <div className="reviews-header">

        <h2>GymX</h2>

        <div className="rating-row">
          <span className="rating-number">4.5</span>
          <span className="stars">★★★★★</span>
          <span>1875 Reviews</span>
          <span className="google">Google</span>
        </div>

      </div>

      <Slider {...settings}>

        {reviews.map((review, index) => (

          <div key={index}>

            <div className="review-card">

              <div className="avatar">
                {review.name.charAt(0)}
              </div>

              <div className="stars-small">
                ★★★★★
              </div>

              <h3>{review.name}</h3>

              <p>{review.date}</p>

              <span>{review.review}</span>

            </div>

          </div>

        ))}

      </Slider>

    </section>
  );
}

export default ReviewsSlider;