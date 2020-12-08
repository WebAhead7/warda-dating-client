import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { Link, useHistory } from "react-router-dom";

import { localStorageKey } from "./utilis/utilis";

const Home = () => {
  const history = useHistory();

  const auth = window.localStorage.getItem(localStorageKey);
  if (auth) {
    history.push("/login");
  }
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
