import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Movie} from "../../types/types";
import useScreenSize from "../../hooks/useScreenSize";
import MovieCard from "../MovieCard/MovieCard";

import styles from "./homePageSection.module.css";
import movieCardStyles from "../MovieCard/movieCard.module.css"

interface PropTypes {
    title: string,
    moviesCategory: Movie,
    link: string
}

const HomePageSection = ({title, moviesCategory, link}:PropTypes) => {

    const screenSize:{width:number, height:number} = useScreenSize();
    const [showMovies, setShowMovies] = useState<number[]>([0, 1, 2, 3])

    useEffect(() => {
        if(screenSize.width < 650){
            setShowMovies([0])
        }else if(screenSize.width < 960){
            setShowMovies([0, 1])
        }else if(screenSize.width < 1200){
            setShowMovies([0, 1, 2])
        }else{
            setShowMovies([0, 1, 2, 4])
        }
    }, [screenSize]);

    const showNextMovie = () => {
        showMovies.push(showMovies[showMovies.length - 1] + 1)
        showMovies.shift()
        const newShowMovies = [...showMovies]
        setShowMovies(newShowMovies)
    }

    const showPrevMovie = () => {
        showMovies.unshift(showMovies[0] - 1)
        showMovies.pop()
        const newShowMovies = [...showMovies]
        setShowMovies(newShowMovies)
    }

    const filteredResults = moviesCategory?.results?.filter((item, index) => index < 10)
    const showedMovies = filteredResults?.filter((item, index) => showMovies.includes(index))

    return (
        <div className={styles.homePageSection}>
            <div className={styles.homePageSectionTitle}>
                <h2>{title}</h2>
                <Link className={styles.homePageSectionTitleLink} to={link}><h2>See More</h2></Link>
            </div>
            <div className={styles.homePageSectionContent}>
                <button disabled={showMovies[0] === 0} onClick={showPrevMovie}>«</button>
                <div className={styles.homePageSectionMovies}>
                    {
                        showedMovies?.map((item) => {
                            return (
                                <MovieCard
                                    key={item?.id}
                                    id={item?.id}
                                    className={movieCardStyles.movieCardHomePage}
                                    title={item?.title}
                                    posterPath={item?.poster_path}/>
                            )
                        })
                    }
                </div>
                <button disabled={showMovies[showMovies.length - 1] === 9} onClick={showNextMovie}>»</button>
            </div>
        </div>
    )
}

export default HomePageSection;