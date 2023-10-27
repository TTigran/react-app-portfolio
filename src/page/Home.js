import React, { useState} from 'react';
import {MediaProvider} from "../MediaContext";
import Navbar from "../components/navbar/Navbar";
import Root from "../Root";
import MediaPage from "../components/media/MediaPage";
import {useNavigate} from "react-router-dom";


const Home = ({count}) => {
    const [flag, setFlag] = useState(true);
    const navigate = useNavigate();


    const handleRouting = (e) => {
        e.target.innerHTML === "Media" ? setFlag(false) : setFlag(true);
        if (e.target.innerHTML === "Signin") navigate('/login') ;
    }


    return (

        <div>
            <MediaProvider>
                <Navbar onButtonClick={handleRouting} flag={!flag}/>

                {flag && <Root count={count}/>}

                {!flag && <div className="w-full h-auto bg-bodyColor text-lightText px-4">
                    <div className="max-w-screen-xl mx-auto">
                        <MediaPage/>

                    </div>
                </div>}


            </MediaProvider>
        </div>

    );
};

export default Home;