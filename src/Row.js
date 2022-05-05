import React,{ useEffect, useState } from 'react';
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const imageBaseUrl = "https://image.tmdb.org/t/p/original/";
function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    // Use Effect for getting data using Axios
    useEffect(()=> {
        const getMovies = async () => {
            const response = await axios({
                method: 'GET',
                url: fetchUrl,
            });
            console.log(response.data.results);
            setMovies(response.data.results);
            return response;
        }
        getMovies();
    },[fetchUrl]);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl("");
        }else{
            movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
            .catch((error) => console.log(error));
        }
    }
    return (
        <div className="row">
            
            {/* Title */}
            <h2 className="row__title">{title}</h2>
            
            {/* Container -> posters */}
            <div className="row__posters">
                {
                    movies.map(movie => (
                        <img 
                        key={movie.id} 
                        onClick = {()=> handleClick(movie)}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                        src={`${imageBaseUrl}${isLargeRow? movie.poster_path: movie.backdrop_path}`} 
                        alt={movie.name}/>
                    ))
                }
            </div>

            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row