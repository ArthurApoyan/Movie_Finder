import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import YTSearch from "youtube-api-search";
import {YTAPIkey} from "../../utils/APIs/ApiKeys";
import YouTube from "react-youtube";
import {Videos} from "../../types/types";

import "./videoTrailer.css";

const VideoTrailer = () => {

    const [videos, setVideos] = useState<Videos[]>()
    const {movieTitle} = useParams()

    useEffect(() => {
        YTSearch({key: YTAPIkey, term: movieTitle + "Official Trailer"}, (videos: Videos[]) => {
            setVideos(videos)
        })
    }, [])

    console.log(videos)

    return (
        videos && <div className="playerContainer">
            <div className="playerDiv">
                <YouTube iframeClassName="player" videoId={videos[0].id.videoId}/>
            </div>
        </div>
    );
};

export default VideoTrailer;