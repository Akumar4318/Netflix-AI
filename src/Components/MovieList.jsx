import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import React from "react";
import Slider from "react-slick"; // Import react-slick
import MovieCard from "./MovieCard"; // Your MovieCard component

const MovieList = ({ title, movies }) => {
  // Settings for the carousel
  const settings = {
    infinite: false,        // Loop the carousel
    slidesToShow: 7,       // Show 1 card at a time
    slidesToScroll: 1,     // Scroll 1 card at a time
    speed: 500,            // Transition speed (in ms)
    nextArrow: <SampleNextArrow />, // Custom next arrow
    prevArrow: <SamplePrevArrow />, // Custom prev arrow
  };

  return (
    <div className="relative w-screen">
      {/* Title Section */}
      <h1 className="bg-black text-white pl-12  font-SegoeBold p-4 text-[1.4rem]">
        {title}
      </h1>

      {/* Carousel Section */}
      <div className="bg-black px-10 py-3">
        <Slider {...settings}>
          {movies && movies.map((item) => (
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
      className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 bg-opacity-75 text-white p-4 rounded-full cursor-pointer"
      onClick={onClick}
    >
      {<FaChevronRight />}
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 -left-5 transform -translate-y-1/2 bg-gray-700 bg-opacity-75 z-30 text-white p-4 rounded-full cursor-pointer"
      onClick={onClick}
    >
      {<FaChevronLeft />}
    </div>
  );
};

export default MovieList;
