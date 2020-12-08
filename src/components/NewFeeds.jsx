import React from "react";
import { serverUrl } from "../utilis/utilis";
import { localStorageKey } from "../utilis/utilis";
import PostContainer from "./Postcontainer";
import InoutPostContainer from "./InoutPostContainer";
import { Link, useHistory } from "react-router-dom";
import "./style.css";

function NewFeeds(props) {
  const [postsData, setPostsData] = React.useState([]);
  const [dataAdded, setdataAdded] = React.useState(true);
  const history = useHistory();

  const auth = window.localStorage.getItem(localStorageKey);
  function logOut() {
    window.localStorage.removeItem(localStorageKey);
    history.push("/");
  }
  React.useEffect(() => {
    if (dataAdded) {
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
            setdataAdded(false);
          } else {
            alert("Something went wrong polz try again later ");
            console.log(response);
          }
        })
        .catch((err) => {
          alert("Something went wrong polz try again later ");
          console.log(err);
        });
    }
  }, [dataAdded]);

  return (
    <div>
      <div>
        <button onClick={logOut} className="logout_button">
          LogOut
        </button>
        {}

        <InoutPostContainer dataAdded={setdataAdded}></InoutPostContainer>

        <div>
          <ul>
            {postsData.length
              ? postsData.map((data) => (
                  <PostContainer
                    key={data.id}
                    content={data.content}
                    title={data.title}
                    userID={data.user}
                  ></PostContainer>
                ))
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NewFeeds;
