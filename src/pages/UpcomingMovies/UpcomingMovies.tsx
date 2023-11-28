import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUpcomingMovies} from "../../store/slices/getUpcomingMovies/getUpcomingMoviesApi";
import {selectUpcomingMovies} from "../../store/slices/getUpcomingMovies/getUpcomingMoviesSlice";

import MoviesOnPage from "../../components/MoviesOnPage/MoviesOnPage";
import Paginator from "../../components/Paginator/Paginator";
import Loading from "../../components/Loading/Loading";

import "./upcomingMovies.css";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";

const UpcomingMovies = () => {

    const dispatch = useAppDispatch()
    const {upcoming, isLoading} = useAppSelector(selectUpcomingMovies)
    const [page, setPage] = useState(1)

    useEffect(() => {
        dispatch(fetchUpcomingMovies(page))
        window.scrollTo(0, 0)
    }, [page])

    return (
        <div className="upcomingMoviesPage">
            {isLoading && <Loading/>}

            <MoviesOnPage className="allMoviesOnOtherPages" allMovies={upcoming}/>

            <Paginator count={4} setPage={setPage}/>
        </div>
    );
};

export default UpcomingMovies;