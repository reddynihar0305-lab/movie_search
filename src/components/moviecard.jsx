import { useState } from "react";
import "./movies_card.css";
import { useMovieContext } from "./context/moviecontext";

function Moviecard({ movie }) {
    const { favorites, addToFavorites, removeFromFavorites } = useMovieContext();
    
    const isFavorite = favorites.some((fav) => fav.id === movie.id);

    const onLike = () => {
        
        if (isFavorite) {
            removeFromFavorites(movie);

        } else {
            addToFavorites(movie);
        }
    };

    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
        : "https://via.placeholder.com/320x380?text=No+Image";

    return(
        <div className="movie_card">
            <div className="movie_poster">
                <img src={posterUrl} alt={movie.title}className="img"/>
                <div className="movie_overlay">
                    {isFavorite ? (
                        <button className="fav_btn like_t" onClick={onLike}>❤️</button>
                    ) : (
                        <button className="fav_btn like_f" onClick={onLike}>🤍</button>
                    )}
                </div>
            </div>
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split('-')[0]}</p>
        </div>
    )
}

export default Moviecard;