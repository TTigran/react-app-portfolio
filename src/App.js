import React, {useEffect, useState} from 'react';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";


const App = () => {
    const [count, setCount] = useState(null);

    useEffect(() => {
        const apiUrl = 'http://mywebsite2.us-east-1.elasticbeanstalk.com/view/count';

        // Check if count is already set to prevent re-request
        if (count === null) {
            fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((data) => {
                    setCount(data.views);
                })
                .catch((error) => {
                    console.error('There was a problem with the fetch operation:', error);
                });
        }
    }, [count]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home  count={count}/>} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;