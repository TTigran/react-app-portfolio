import React, {useEffect, useState} from 'react';
import 'video-react/dist/video-react.css';
import {Player} from 'video-react';
import {mediaItems} from "../../data/data";
import {useMediaContext} from "../../MediaContext";
import './VideoPlayer.css'


const VideoPlayer = () => {
    const mediaContext = useMediaContext();
    const [media, setMedia] = useState(mediaItems);

    function splitArrayIntoChunks(arr, chunkSize) {
        const chunkedArray = [];

        for (let i = 0; i < arr.length; i += chunkSize) {
            chunkedArray.push(arr.slice(i, i + chunkSize));
        }

        return chunkedArray;
    }

    useEffect(() => {
        const allMedias = mediaItems.flat();
        const filteredMedias = allMedias.filter((media) => {
            return media.title.includes(mediaContext.filteredTitle);
        });
        const result = splitArrayIntoChunks(filteredMedias, 4)
        setMedia(result);
    }, [mediaContext.filteredTitle]);


    return (
            <>
                <div className="container">
                    {media.map((it, index) => (
                        <>
                            <br/>
                            <div className="root-video">
                                {media[index].map((item) => (
                                    <div id={item.title} className="video-container" key={item.id}>
                                        <h1 className="video-title">{item.title}</h1><br/>
                                        <Player
                                            className="video-player"
                                            playsInline
                                            src={item.path} // Replace with the path to your video file
                                        />
                                    </div>
                                ))}
                            </div>
                        </>
                    ))}
                </div>
            </>


        );
    }
;

export default VideoPlayer;