import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {fetchPopularMovies} from "../../store/slices/getPopularMovies/getPopularMoviesApi";
import {selectPopularMovies} from "../../store/slices/getPopularMovies/getPopularMoviesSlice";

import Loading from "../../components/Loading/Loading";
import MoviesOnPage from "../../components/MoviesOnPage/MoviesOnPage";
import Paginator from "../../components/Paginator/Paginator";

import "./popularMovies.css";

const PopularMovies = () => {

    const dispatch = useAppDispatch()
    const {populars, isLoading} = useAppSelector(selectPopularMovies)
    const [page, setPage] = useState(1)

    useEffect(() => {
        dispatch(fetchPopularMovies(page))
        window.scrollTo(0, 0)
    }, [page])

    return (
        <div className="popularMoviesPage">
            {isLoading && <Loading/>}

            <MoviesOnPage className="allMoviesOnPopularPage" allMovies={populars}/>

            <Paginator count={3} setPage={setPage}/>
        </div>
    );
};

export default PopularMovies;