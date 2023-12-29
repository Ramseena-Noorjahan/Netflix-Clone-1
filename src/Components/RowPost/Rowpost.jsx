import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import { imageUrl, API_KEY } from "../../Constants/Constants";
import Youtube from "react-youtube";

function Rowpost(props) {
  const [movies, setMovies] = useState([]);
  const [urlid, setUrlId] = useState("");


  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        alert("Network Error");
      });


  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data);
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log("array empty");
        }
      });
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            onClick={() => handleMovie(obj.id)}
            className="poster"
            src={`${imageUrl + obj.poster_path}`}
            alt="POST"
          />
        ))}
      </div>

      {urlid && <Youtube opts={opts} videoId={urlid.key} />}
    </div>
  );
}

export default Rowpost;
