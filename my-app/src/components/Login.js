import React, { useState } from "react";

function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData);
    }

    function handleChange(event) {
        const key = event.target.id
        console.log(key)
        setFormData({ 
            ...formData, 
            [key]: event.target.value 
          })
    }

    console.log(formData)

    return (
        <div className="title">
            <form onSubmit={handleSubmit}>
                <h1>Create an Account</h1>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    value={formData.username}
                    onChange={handleChange}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                />

                <input type="submit" value="Sign Up" />
            </form>
        </div>
    )
}

export default Login;