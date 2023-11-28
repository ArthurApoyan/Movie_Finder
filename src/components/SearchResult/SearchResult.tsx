import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useParams} from "react-router";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {selectSearchResult} from "../../store/slices/searchResult/searchResultSlice";
import {fetchSearchResult} from "../../store/slices/searchResult/searchResultApi";
import {POSTER_URL, SEARCH_URL} from "../../api/url/urls";
import {Results} from "../../types/types";
import Paginator from "../Paginator/Paginator";

import "./searchResult.css"

const SearchResult = () => {

    const dispatch = useAppDispatch();
    const searchResult = useAppSelector(selectSearchResult)
    const [page, setPage] = useState(1)
    const {search} = useParams()

    useEffect(() => {
        dispatch(fetchSearchResult(SEARCH_URL(search, page)))
    }, [search, page])

    const filteredResults: Results[] = searchResult?.results?.filter((item: Results) => item.poster_path)

    return (
        <div className="searchResult">
            <h1>Total pages : {searchResult?.total_pages}</h1>
            <div className="foundMovies">
                {
                    filteredResults?.map((item) => {
                        return (
                            <div key={item.id} className="foundMovieCard">
                                <Link className="foundMovieCardLink" to={`${item.id}`}><img className="popularMoviePoster" src={POSTER_URL + item?.poster_path} alt="Movie Poster"/></Link>
                                <Link className="foundMovieCardLink" to={`${item.id}`}><h3>{item?.title}</h3></Link>
                            </div>
                        )
                    })
                }
            </div>
            <Paginator count={searchResult?.total_pages} setPage={setPage}/>
        </div>
    );
};

export default SearchResult;