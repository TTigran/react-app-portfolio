import React from 'react';
import Title from "../layouts/Title";
import VideoPlayer from "./VideoPlayer";

const MediaPage = () => {
    return (
        <section
            id="media"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            <div className="flex justify-center items-center text-center">
                <Title title="MY MEDIA PLATFORM" des="Media"/>
            </div>
            <VideoPlayer/>
        </section>
    );
};

export default MediaPage;