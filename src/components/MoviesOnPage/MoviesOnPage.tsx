import React from "react";
import {Movie} from "../../types/types";
import MovieCard from "../MovieCard/MovieCard";

import styles from "./moviesOnPage.module.css";
import movieCardStyles from "../MovieCard/movieCard.module.css";

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
                        <div key={item.id} className={styles.movieOnPage}>
                            <MovieCard id={item?.id} className={movieCardStyles.movieCardOnPage} title={item?.title} posterPath={item?.poster_path}/>
                            <h3>Rate: {item?.vote_average.toFixed(1)}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MoviesOnPage;