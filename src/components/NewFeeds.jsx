import React from "react";
import { serverUrl } from "../utilis/utilis";
import { localStorageKey } from "../utilis/utilis";

function NewFeeds() {
  const [postsData, setPostsData] = React.useState([]);
  const auth = window.localStorage.getItem(localStorageKey);
  React.useEffect(() => {
    fetch(serverUrl + "/posts", {
      method: "GET",
      headers: {
        "x-auth-token": auth,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response && response.length > 0) {
          setPostsData(response);
        } else {
          alert("Something went wrong polz try again later ");
          console.log(response);
        }
      })
      .catch((err) => {
        alert("Something went wrong polz try again later ");
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="massegeBox">
        <h3>Write your post here</h3>
        <div>
          <button type="buttom">All Posts</button>
        </div>
        <div>
          <button type="buttom">Male Posts</button>
        </div>
        <div>
          <button type="buttom">Female Posts</button>
        </div>

        <div className="posts-array">
          <output>{JSON.stringify(postsData)}</output>
        </div>
      </div>
    </div>
  );
}

export default NewFeeds;
