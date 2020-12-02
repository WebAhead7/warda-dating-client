import React from 'react';




function NewFeeds() {
    const [postsData, setPostsData] = React.useState([]);
    const data = JSON.parse(localStorage.getItem("warda"));
    React.useEffect(() => {
        fetch('http://wardadatings.herokuapp.com/posts', {
            method: 'GET',
            headers: {
                'Authorization': data.auth.access_token,
            },

        }).then(response => response.json())
            .then(response => setPostsData(response))
            .catch((err) => console.log(err));
    }, [])


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
    )

}

export default NewFeeds;