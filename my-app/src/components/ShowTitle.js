import React, { useState } from "react";

const initialFormState = {
    image: ""
}

const ShowTitle = ({ addShowTitle }) => {
    const [showData, setShowData] = useState(initialFormState)

    const handleOnChange =(e) => {
        const { name, value} = e.target;

    setShowData(showData => {
        return {
            ...showData,
            [name]: value
        }
    })
}

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://api.tvmaze.com/shows", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(showData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                addShowTitle(data)
            })
            console.log(showData);

            setShowData(initialFormState);
    }

    return (
        <div>
            <h3>Title</h3>
        </div>
    )
}


export default ShowTitle;