import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {selectTrendingMovies} from "../../store/slices/getTrendingMovies/getTrendingMoviesSlice";
import {fetchTrendingMovies} from "../../store/slices/getTrendingMovies/getTrendingMoviesApi";

import MoviesOnPage from "../../components/MoviesOnPage/MoviesOnPage";
import Paginator from "../../components/Paginator/Paginator";
import Loading from "../../components/Loading/Loading";

import styles from "./trendingMovies.module.css";
import allMoviesStyles from "../../components/MoviesOnPage/moviesOnPage.module.css";

const TrendingMovies = () => {

    const dispatch = useAppDispatch()
    const {trending, isLoading} = useAppSelector(selectTrendingMovies)
    const [page, setPage] = useState(1)

    useEffect(() => {
        dispatch(fetchTrendingMovies(page))
        window.scrollTo(0, 0)
    }, [page])

    return (
        <div className={styles.trendingMoviesPage}>
            {isLoading && <Loading/>}

            <MoviesOnPage className={allMoviesStyles.allMoviesOnOtherPages} allMovies={trending}/>

            <Paginator count={10} setPage={setPage}/>
        </div>
    );
};

export default TrendingMovies;