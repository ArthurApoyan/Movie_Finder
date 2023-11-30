import React from 'react';
import {Link} from "react-router-dom";
import {POSTER_URL} from "../../api/url/urls";

import styles from "./movieCard.module.css";

interface PropTypes {
    id: number;
    posterPath: string;
    title: string;
    className: string;
}

const MovieCard = ({id, posterPath, title, className}:PropTypes) => {
    return (
        <div className={className} key={id}>
            <Link className={styles.movieCardLink} to={`${id}`}>
                <img
                    className={styles.movieCardPoster}
                    src={POSTER_URL + posterPath}
                    alt="poster"
                    loading="lazy"
                />
            </Link>
            <Link className={styles.movieCardLink} to={`${id}`}><h3>{title}</h3></Link>
        </div>
    );
};

export default MovieCard;