import React from "react";
import { serverUrl } from "../utilis/utilis";
import { localStorageKey } from "../utilis/utilis";

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
        console.log(response);
      })
      .catch((err) => {
        // alert("Something went wrong polz try again later ");
        console.log(err);
      });
  }, []);
  return (
    <div key={props.id}>
      <h1>{user.userName}</h1>
      <h3>{props.title}</h3>
      <h3>{props.content}</h3>
    </div>
  );
}
export default PostContainer;
