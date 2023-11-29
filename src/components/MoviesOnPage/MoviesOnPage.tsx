import React from "react";
import {Movie} from "../../types/types";
import MovieCard from "../MovieCard/MovieCard";

import "./moviesOnPage.css";

interface PropTypes {
    className: string;
    allMovies: Movie
}

const MoviesOnPage = ({className, allMovies}:PropTypes) => {
    return (
        <div className={className}>
            {
                allMovies?.results?.map((item) => {
                    return (
                        <div key={item.id} className="movieOnPage">
                            <MovieCard id={item?.id} className="movieCardOnPage" title={item?.title} posterPath={item?.poster_path}/>
                            <h3>Rate: {item?.vote_average.toFixed(1)}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MoviesOnPage;