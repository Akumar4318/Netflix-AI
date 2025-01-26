import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import React from "react";
import Slider from "react-slick"; // Import react-slick
import MovieCard from "./MovieCard"; // Your MovieCard component

const MovieList = ({ title, movies }) => {
  // Responsive settings for the carousel
  const settings = {
    infinite: false,
    slidesToShow: 6, // Default for large screens
    slidesToScroll: 1,
    speed: 700,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1280, // Large screens
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024, // Medium screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Small screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Extra small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative w-screen ">
      {/* Title Section */}
      <h1 className="bg-black opacity-90  text-white pl-6 sm:pl-12 font-bold p-3 sm:p-4 text-base sm:text-lg md:text-xl">
        {title}
      </h1>

      {/* Carousel Section */}
      <div className="bg-black  opacity-90  sm:px-10 py-3">
        <Slider {...settings}>
          {movies &&
            movies.map((item) => (
              <MovieCard key={item.id} posterPath={item.poster_path} />
            ))}
        </Slider>
      </div>
    </div>
  );
};

// Custom Arrow Components
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-9 transform -translate-y-1/2 bg-gray-700 bg-opacity-75 text-white p-2 sm:p-4 rounded-full cursor-pointer z-10"
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 -left-7 transform -translate-y-1/2 bg-gray-700 bg-opacity-75 text-white p-2 sm:p-4 rounded-full cursor-pointer z-10"
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
};

export default MovieList;