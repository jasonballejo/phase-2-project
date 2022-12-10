import React, { useState } from "react";

function Register({ onFormSwitch }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="formcontainer">
            <form className="registerform" onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input
                    type="name"
                    placeholder="Your Full Name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="username">Username</label>
                <input
                    type="email"
                    placeholder="Your Email"
                    id="email"
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

                <button className="submitbutton" type="submit" value="Sign Up">Create Account</button> 
            </form>
            <button className="linkbutton" onClick={() => onFormSwitch('login')}>Already have an account? Login Here.</button>
        </div>
    )
}

export default Register;