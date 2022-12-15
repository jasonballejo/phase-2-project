import { useState } from "react";
import Watchlist from "./Watchlist"; 

function FavCard ({ id, name, image, show, isInWatchlist, handleWatchListItem }) {
    const [thumbsUp, setThumbsUp] = useState(0);

    const handleClap = () => setThumbsUp(thumbsUp + 1);

    const addWatchlistOnClick = () => {
      fetch(`http://localhost:3000/shows/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      isInWatchlist: !isInWatchlist,
    }),
  })
    .then((r) => r.json())
    .then((updatedItem) => handleWatchListItem(updatedItem));
    };
    
  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
      </figure>

      <footer className="extra">
        <button className="thumbsup" onClick={handleClap}>
          👍🏼{thumbsUp}
        </button>

        <button 
          className="remove"
          onClick={addWatchlistOnClick}
        >
          ➖  REMOVE
        </button>
        
      </footer>
    </li>
  );
};


export default FavCard;