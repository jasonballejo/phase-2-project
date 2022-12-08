import { useState } from "react";
import Watchlist from "./Watchlist";

function Card ({ id, name, type, image, summary, year, genres, show, updateItem, addFavorites }) {
    const [thumbsUp, setThumbsUp] = useState(0);

    const handleThumbsUp = () => setThumbsUp(thumbsUp + 1);

    function handleClickAddToWatchlist() {
        fetch(`http://localhost:3000/shows/${show.id}`, {
            method: "PATCH",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            isInWatchlist: !show.isInWatchlist,
            }),
        })
            .then((r) => r.json())
            .then((updatedItem) => updateItem(updatedItem) || addFavorites(updatedItem));
        }

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
                onClick={handleClickAddToWatchlist}
            >
                {show.isInWatchlist ? "➖ WATCHLIST" : "➕ WATCHLIST"}
            </button>
          </footer>
        </li>
      );
    };
    
    
    export default Card;