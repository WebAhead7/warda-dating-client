import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <h2>The best website to meat your life partner and make Looooove</h2>
            <div className="buttoms">
                <Link to="Login">
                    <button className="Login-style">Login</button>
                </Link>
                <Link to="Register">
                    <button className="Register-style">Register</button>
                </Link>
                {/* <NewFeeds className="Feeds-style">NewFeeds</NewFeeds> */}
            </div>

        </div>

    );
};

export default Home;