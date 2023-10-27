import React, {useState} from 'react'
import Title from "../components/layouts/Title";
import {useNavigate} from 'react-router-dom';
import Admin from "../components/admin/Admin";


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedAdmin, setIsLoggedAdmin] = useState(true);
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate('/');
    };

    const handleLogin = () => {
        if (username && password) {
            setIsLoggedAdmin(false)
        }

    };

    return (
        <div style={{height: "1003px"}} className="w-full h-auto bg-bodyColor text-lightText px-4">
            <div className="max-w-screen-xl mx-auto">
                {!isLoggedAdmin ? <Admin/> :
                    <section
                        id="signin"
                        className="w-full py-20 border-b-[1px] border-b-black"
                    >
                        <div className="flex justify-center items-center text-center">
                            <Title title="Sign in to Landing page" des="Login"/>
                        </div>

                        <div className="login-container">
                            <form className="login-form">
                                <div>
                                    <label htmlFor="username">Username:</label>
                                    <input
                                        type="text"
                                        id="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password">Password:</label>
                                    <input
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <button className="login-button" type="button" onClick={handleLogin}>
                                    Login To Admin
                                </button>
                                <button className="login-button" type="button" onClick={handleNavigation}>
                                    Back Home Page
                                </button>
                            </form>
                        </div>
                    </section>}
            </div>
        </div>


    );
}

export default Login