import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FeedbackSlider({ feedbacks = [] }) {

  const settings = {
    lazyLoad: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (

    <Slider {...settings}>
      {feedbacks.map((feedback, index) => (
        <div key={index} className="p-4 border rounded-lg shadow-lg bg-white w-20">
          <div className="flex items-center mb-3">
            <img
              src={feedback.user.image}
              alt={feedback.user.username}
              className="w-12 h-12 rounded-full mr-3"
            />
            <div>
              <h4 className="text-lg font-semibold">{feedback.user.username}</h4>
              <p className="text-sm text-gray-500">{new Date(feedback.createdAt).toDateString()}</p>
            </div>
          </div>
          <p className="text-gray-700 mb-2">{feedback.message}</p>
          <div className="flex items-center">
            <span className="text-yellow-400">
              {"★".repeat(feedback.rating)}
              {"☆".repeat(5 - feedback.rating)}
            </span>
          </div>
        </div>
      ))}
    </Slider>

  );
}

export default FeedbackSlider;