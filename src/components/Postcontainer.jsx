import React from "react";
import { serverUrl } from "../utilis/utilis";
import { localStorageKey } from "../utilis/utilis";
import "./style.css";

function PostContainer(props) {
  const auth = window.localStorage.getItem(localStorageKey);

  const [user, setUser] = React.useState({});
  React.useEffect(() => {
    fetch(serverUrl + "/users/" + props.userID, {
      method: "GET",
      headers: {
        "x-auth-token": auth,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setUser(response);
      })
      .catch((err) => {
        // alert("Something went wrong polz try again later ");
        console.log(err);
      });
  }, []);
  return (
    <div key={props.id} className="post_container">
      <h1 className="user_name">{user.name} :</h1>

      {user.gender === "male" ? (
        <img className="gender_img" src="images/mars.png"></img>
      ) : (
        <img className="gender_img" src="images/femenine.png"></img>
      )}

      <h3 className="title_post">{props.title}</h3>
      <h3 className="content_post">{props.content}</h3>
    </div>
  );
}
export default PostContainer;
