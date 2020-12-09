import React from "react";
import { Link, useHistory } from "react-router-dom";
import { serverUrl } from "../utilis/utilis";
import { localStorageKey } from "../utilis/utilis";
import "./Login.css"

function Login() {
  const history = useHistory();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  React.useEffect(() => {
    const auth = window.localStorage.getItem(localStorageKey);
    if (auth) {
      history.push("/NewFeeds");
    }
  }, []);

  function logIn() {
    const data = {
      email: email,
      password: password,
    };
    fetch(serverUrl + "/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.token) {
          window.localStorage.setItem(localStorageKey, response.token);

          history.push("/NewFeeds");
        } else {
          alert("please check email and password");
        }
      })
      .catch((err) => {
        alert("please check email and password");
        console.log(err);
      });
  }
  return (
    <div>
      <h1 className="title">Please login</h1>
      <div>
        <span>Enter your Email</span>
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <span>Enter your password</span>
        <input
          type="text"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit" onClick={logIn}>
        Login
      </button>

      <div>
        <h2>If your are not Login please register</h2>

        <Link to="./Register">
          <button type="submit">Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
