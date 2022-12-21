import React from "react";
import Popup from "./Popup"; 

function FavCard ({ id, name, image, show, isInWatchlist, handleWatchListItem, btnPopup, setBtnPopup }) {


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
        <button className="add" onClick={() => setBtnPopup(true)}>DETAILS</button>
              <Popup 
                trigger={btnPopup} 
                setTrigger={setBtnPopup} 
              >
              </Popup>

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