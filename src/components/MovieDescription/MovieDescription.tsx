import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router";
import {POSTER_URL} from "../../api/url/urls";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {fetchMovieDescription} from "../../store/slices/movieDescription/movieDescriptionApi";
import {selectMovieDescription} from "../../store/slices/movieDescription/MovieDescriptionSlice";

import styles from "./movieDescription.module.css";

const MovieDescription = () => {

    const dispatch = useAppDispatch()
    const movieDetails = useAppSelector(selectMovieDescription)
    const navigate = useNavigate();
    const {id} = useParams()

    useEffect(() => {
        dispatch(fetchMovieDescription(id!))
    }, [id])

    return (
        <div className={styles.movieDescriptionContainer}>
            <div className={styles.movieDescription}>
                <div className={styles.movieDescriptionPoster}>
                    <img src={POSTER_URL + movieDetails?.poster_path} alt="moviePoster"/>
                    <h2>Rate : {movieDetails?.vote_average?.toFixed(1)}</h2>
                </div>
                <div className={styles.movieInfo}>
                    <h2>{movieDetails?.title}</h2>
                    <h3><span>Release Date : </span> {movieDetails?.release_date}</h3>
                    <h3><span>Budget : </span> {movieDetails?.budget}$</h3>
                    <h3><span>Original Language : </span> {movieDetails?.original_language?.toUpperCase()}</h3>
                    <h4><span>Movie homepage : </span> <Link style={{color: "white"}} target="_blank"
                                                             to={movieDetails?.homepage}>{movieDetails?.homepage}</Link>
                    </h4>
                    <p><span>Overview : </span>{movieDetails.overview}</p>
                    <div>
                        <Link className={styles.trailerLink} to={`/${movieDetails?.id}/${movieDetails?.title}`}>Watch Movie Trailer</Link>
                    </div>
                </div>
                <button onClick={() => {
                    navigate(-1)
                }}>x
                </button>
            </div>
        </div>
    );
};

export default MovieDescription;