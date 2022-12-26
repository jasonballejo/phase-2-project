import React from "react";
import Popup from "./Popup"; 

function Card ({ name, image, year, genres, show, summary, handleWatchListItem, btnPopup, setBtnPopup }) {

    // const showSelected = show.filter(object => object.id)

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

    // const selectedShowFetch = () => {
    //   fetch(`http://localhost:3000/shows/${show.id}`, {
    //     method: "GET"
    //   })
    // }

    function multiClick() {
      setBtnPopup(true);
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
            <button className="add" onClick={() => multiClick()}>DETAILS</button>
            {/* {showSelected.map(selected => */}
              <Popup 
                // key={selected.id}
                // {...selected}
                trigger={btnPopup} 
                setTrigger={setBtnPopup}
              >
              </Popup>
              {/* )} */}

            <button 
                className={show.isInWatchlist ? "remove" : "add"}
                onClick={addWatchlistOnClick}
            >
                {show.isInWatchlist ? "➖  REMOVE" : "➕ WATCHLIST" }
            </button>
          </footer>
        </li>
      );
    };
  
    
    export default Card;