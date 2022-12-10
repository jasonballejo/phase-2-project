import React, { useState } from "react";

function Login({ onFormSwitch }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })

    function handleSubmit(e) {
        e.preventDefault();
        console.log(email);
    }

    function handleChange(event) {
        const key = event.target.id
        console.log(key)
        setFormData({ 
            ...formData, 
            [key]: event.target.value 
          })
    }

    // function handleClickStoreLogin() {
    //     console.log("clcked");
    //     }

    // function handleClickStoreLogin() {
    //     fetch(`http://localhost:3000/login/${login.id}`, {
    //         method: "PATCH",
    //         headers: {
    //         "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //         isInWatchlist: !login.isInWatchlist,
    //         }),
    //     })
    //         .then((r) => r.json())
    //         .then((updatedItem) => setLogin(updatedItem));
    //     }

    return (
        <div className="formcontainer">
            <form className="loginform" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    type="email"
                    placeholder="Your Email"
                    id="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder="Your Password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="submitbutton" type="submit" value="Sign Up">Login</button> 
            </form>
            <button className="linkbutton" onClick={() => onFormSwitch('register')}>Don't have an account? Register Here.</button>
        </div>
    )
}

export default Login;