import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function NewShow({ addNewShow }) {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [language, setLanguage] = useState("English");
    const [genres, setGenres] = useState("");
    const [year, setYear] = useState("");
    const [image, setImage] = useState("");
    const [summary, setSummary] = useState("");
    const [isInWatchlist, setIsInWatchlist] = useState(false);

    let navigate = useNavigate();
    const typeList = ["Scripted", "Reality", "Animation"];
    const genresList = ["Comedy", "Family", "Drama", "Action", "Adventure", "Music", "Horror", "Crime", "Legal"];

    function handleSubmit(e) {
        e.preventDefault();
        const itemData ={
            name: name,
            type: type,
            language: language,
            genres: genres,
            year: year,
            image: image,
            summary: summary,
            isInWatchlist: isInWatchlist
    };
        fetch("http://localhost:3000/shows", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
        },
        body: JSON.stringify(itemData),
        })
           .then((res) => res.json())
           .then(data => {
                addNewShow(data)
                    return navigate("/")
                })
    }

    const typeCheckbox = typeList.map(types => {
        const label = types.toLowerCase()
        const checked = type.includes(types)
        function handleChange(e) {
            if (e.target.checked) {
                setType(type => [...type, types])
            } else {
                setType(type => type.filter(t => t !== types))
            }
        }
        return (
            <div key={types}>
                <input 
                    type="checkbox" 
                    name={label} 
                    id={label} 
                    checked={checked} 
                    onChange={handleChange} 
                />
                <label htmlFor={label}>{types}</label>
            </div>
        )
    })

    const genresCheckbox = genresList.map(genre => {
        const label = genre.toLowerCase()
        const checked = genres.includes(genre)
        function handleChange(e) {
            if (e.target.checked) {
                setGenres(genres => [...genres, genre])
            } else {
                setGenres(genres => genres.filter(t => t !== genre))
            }
        }
        return (
            <div key={genre}>
                <input 
                    type="checkbox" 
                    name={label} 
                    id={label} 
                    checked={checked} 
                    onChange={handleChange} 
                />
                <label htmlFor={label}>{genre}</label>
            </div>
        )
    })

    return (
        <div className="formcontainer">
            <h1>Add Your Favorite Show Here</h1>
            <form className="addshowform" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <fieldset className="checkbox">
                    <legend>Type</legend>
                    {typeCheckbox}
                </fieldset>

                <label htmlFor="language">Language</label>
                <input
                    type="text"
                    id="language"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                />

                <fieldset className="checkbox">
                    <legend>Genres</legend>
                    {genresCheckbox}
                </fieldset>

                <label htmlFor="year">Year</label>
                <input
                    type="text"
                    id="year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                />

                <label htmlFor="image">Image</label>
                <input
                    type="text"
                    id="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />

                <label htmlFor="summary">Summary</label>
                <textarea
                    id="summary"
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                />

            <div className="footerbutton">
                {/* <button className="submitbutton">
                    <Link to={`/`}>Home</Link>
                </button> */}

                <input 
                    className="submitbutton" 
                    type="submit"
                /> 
            </div>
            </form>
        </div>
    )
}

export default NewShow;