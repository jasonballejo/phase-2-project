import React, { useState } from "react";

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        const itemData ={
            name: username,
            password: password,
    };
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
        },
        body: JSON.stringify(itemData),
        })
            .then((res) => res.json())
            .then((newUser) => console.log(newUser))
    }

    const formData = {
        username,
        password
    }

    return (
        <div className="formcontainer">

            <form className="loginform" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    placeholder="Username"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder="Your Password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <input 
                    className="submitbutton" 
                    type="submit" 
                    value="Sign-in"
                /> 
            </form>
        </div>
    )
}

export default Login;