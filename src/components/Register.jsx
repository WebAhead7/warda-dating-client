import React from 'react';
import { useHistory } from 'react-router-dom';


function Register() {
    const history = useHistory()
    const [email, setEmail] = React.useState("");
    const [name, setName] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [password, setPassword] = React.useState("");


    function fetchPost() {
        const data = {
            email: email,
            name: name,
            gender: gender,
            password: password
        };
        fetch('http://wardadatings.herokuapp.com/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(response => {
                console.log(data);
                if (data) {
                    // open login page 
                    history.push('/Login')
                }
            })

            .catch((err) => console.log(err));


    }

    return (
        <div>
            <h1>Please register so you can share with us your posts and find your future love</h1>
            <div className="content">
                <span>Enter you Email</span>
                <input type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required />
            </div>
            <div>
                <span>Enter your name</span>
                <input type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required />
            </div>

            <form>
                <span>Choose your gender</span>
                <div>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={gender === "male"}
                        onChange={(event) => setGender(event.target.value)}
                        required />Male
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={gender === "female"}
                        onChange={(event) => setGender(event.target.value)}
                        required />female

                </div>
            </form>

            <div>
                <span>Enter your password</span>
                <input type="text" required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>


            <button type="submit" onClick={fetchPost} required>Register</button>





        </div>
    )


};




export default Register;