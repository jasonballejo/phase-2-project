import React from "react";

function Card ({ name, image, year, genres, show, handleWatchListItem, onDeleteItem }) {

  const addWatchlistOnClick = () => {
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
    .then((updatedItem) => handleWatchListItem(updatedItem));
    };

    const handleDeleteClick = () => {
      fetch(`http://localhost:3000/shows/${show.id}`, {
        method: "DELETE",
      })
        .then((r) => r.json())
        .then(() => onDeleteItem(show));
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

          <button 
                className={show.isInWatchlist ? "remove" : "add"}
                onClick={addWatchlistOnClick}
            >
                {show.isInWatchlist ? "➖  REMOVE" : "➕ WATCHLIST" }
            </button>

            <button className="add" onClick={handleDeleteClick}>DELETE</button>
           
          </footer>
        </li>
      );
    };
  
    
    export default Card;