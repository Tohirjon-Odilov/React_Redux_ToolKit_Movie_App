import React, { useEffect } from "react";
import movieApi from "../../common/apis/movieApi";
import MovieListing from "../MovieListing/MovieListing";
import { APIKey } from "../../common/apis/movieApiKey";

const Home = () => {
  const movieText = "Harry";
  const movieType = "movie";

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${movieText}&type=${movieType}`)
        .catch((err) => {
          console.log("Err: ", err);
        });
      console.log(response);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
