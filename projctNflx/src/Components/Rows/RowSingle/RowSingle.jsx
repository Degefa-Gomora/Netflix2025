import React, { useState, useEffect } from "react";
import "./RowSingle.css";
import axios from "../../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

// Define the RowSingle component correctly
function RowSingle({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const base_url = "https://image.tmdb.org/t/p/original";

  // Fix useEffect syntax by removing async directly on the callback
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        console.log("Fetching URL:", fetchUrl);
        const request = await axios.get(fetchUrl); // Use fetchUrl directly with TMDB baseURL
        console.log("API Response:", request.data);
        setMovies(request.data.results || []);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching movies:", error.message);
        setError(
          "Failed to load movies. Please check the API key or try again later."
        );
        setLoading(false);
      }
    }
    fetchData();
  }, [fetchUrl]);

  //   Define handleClick function
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
        (url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          setTrailerUrl(urlParams.get("v"));
        }
      );
    }
  };

  // Define opts for YouTube player
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // Return JSX
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies?.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie?.name}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
          />
        ))}
      </div>
      <div style={{ padding: "5px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default RowSingle;
