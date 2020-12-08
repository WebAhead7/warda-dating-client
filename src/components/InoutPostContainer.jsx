import React from "react";
import { serverUrl } from "../utilis/utilis";
import { localStorageKey } from "../utilis/utilis";

function InoutPostContainer(props) {
  const auth = window.localStorage.getItem(localStorageKey);

  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  function addPost() {
    const data = {
      title: title,
      content: content,
    };
    fetch(serverUrl + "/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": auth,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        setTitle("");
        setContent("");
        props.dataAdded(true);
        console.log(response);
      })
      .catch((err) => {
        // alert("Something went wrong polz try again later ");
        setTitle("");
        setContent("");
        console.log(err);
      });
  }

  return (
    <div>
      <input
        type="text"
        required
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      ></input>
      <br></br>
      <input
        type="text"
        required
        value={content}
        onChange={(event) => setContent(event.target.value)}
      ></input>
      <button onClick={addPost}>Add Post</button>
    </div>
  );
}
export default InoutPostContainer;
