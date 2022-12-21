import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddShow({ username, setUsername, password, setPassword, isSignedIn, signedInClicked }) {
    let navigate = useNavigate();

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
            .then((newUser) => {
                console.log(newUser)
                if (isSignedIn === true) {
                    navigate("/")
                } else {
                    navigate("/login")
                }
            })
    }

    return (
        <div className="formcontainer">
            <h1>{isSignedIn ? `Welcome ${username}` : "Sign in"}</h1>
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
            <div className="footerbutton">
                {/* <button className="submitbutton">
                    <Link to={`/`}>Home</Link>
                </button> */}

                <input 
                    className="submitbutton" 
                    type="submit" 
                    value={isSignedIn ? 'Sign-out' : 'Sign-in'}
                    onClick={signedInClicked}
                /> 
            </div>
            </form>
        </div>
    )
}

export default AddShow;