import { useState } from "react";
import Watchlist from "./Watchlist"; 

function Card ({ id, name, type, image, summary, year, genres, show, updateItem, favorites, setFavorites, addFavShow }) {
    const [thumbsUp, setThumbsUp] = useState(0);

    const handleThumbsUp = () => setThumbsUp(thumbsUp + 1);

    function handleShowSubmit() {
        fetch(`http://localhost:3000/watchlist`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(setFavorites),
            })
              .then((r) => r.json())
              .then((updatedWatchlist) => setFavorites(updatedWatchlist));
        }

        // function submit() {
        //   console.log("submitted")
        // }

    return (
        <li className="card">
          <figure className="image">
            <img src={image} alt={name} />
          </figure>
    
          <section className="details">
            <h4>{name}</h4>
            <p>{year} - {genres}</p>
          </section>
    
          <footer className="extra">
            <button className="thumbsup" onClick={handleThumbsUp}>
              👍🏼{thumbsUp}
            </button>

            <button 
                className={show.isInWatchlist ? "remove" : "add"}
                  onClick={addFavShow}
                  onSubmit={handleShowSubmit} 
                            //See if we can click and submit a POST request
                                      // If we can then run a GET request in the watchlist
            >
                {show.isInWatchlist ? "➖ WATCHLIST" : "➕ WATCHLIST"}
            </button>
          </footer>
        </li>
      );
    };
    
    
    export default Card;