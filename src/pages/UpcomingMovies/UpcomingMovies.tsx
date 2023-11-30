import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {fetchUpcomingMovies} from "../../store/slices/getUpcomingMovies/getUpcomingMoviesApi";
import {selectUpcomingMovies} from "../../store/slices/getUpcomingMovies/getUpcomingMoviesSlice";

import MoviesOnPage from "../../components/MoviesOnPage/MoviesOnPage";
import Paginator from "../../components/Paginator/Paginator";
import Loading from "../../components/Loading/Loading";

import styles from "./upcomingMovies.module.css";
import allMoviesStyles from "../../components/MoviesOnPage/moviesOnPage.module.css";

const UpcomingMovies = () => {

    const dispatch = useAppDispatch()
    const {upcoming, isLoading} = useAppSelector(selectUpcomingMovies)
    const [page, setPage] = useState(1)

    useEffect(() => {
        dispatch(fetchUpcomingMovies(page))
        window.scrollTo(0, 0)
    }, [page])

    return (
        <div className={styles.upcomingMoviesPage}>
            {isLoading && <Loading/>}

            <MoviesOnPage className={allMoviesStyles.allMoviesOnOtherPages} allMovies={upcoming}/>

            <Paginator count={4} setPage={setPage}/>
        </div>
    );
};

export default UpcomingMovies;