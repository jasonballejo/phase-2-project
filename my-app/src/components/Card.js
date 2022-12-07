import { useState } from "react";
import Watchlist from "./Watchlist";

function Card ({ id, name, type, image, summary, year, genres, handleFavClicks, show, updateItem }) {
    const [thumbsUp, setThumbsUp] = useState(0);

    const handleClap = () => setThumbsUp(thumbsUp + 1);


    function handleAddToWatchlist() {
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
            .then((updatedItem) => updateItem(updatedItem));
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
            <button className="thumbsup" onClick={handleClap}>
              👍🏼{thumbsUp}
            </button>

            <button 
                className={show.isInWatchlist ? "remove" : "add"}
                onClick={handleAddToWatchlist}
            >
                {show.isInWatchlist ? "➖ WATCHLIST" : "➕ WATCHLIST"}
                {/* {thumbsUp} */}
            </button>
          </footer>
        </li>
      );
    };
    
    
    export default Card;

    // test 
    // function Card ({ id, name, type, image, summary, year, genres, handleFavClicks, show }) {
    //     const [thumbsUp, setThumbsUp] = useState(0);
    
    //     const handleClap = () => setThumbsUp(thumbsUp + 1);
    
    //     return (
    //         <li className="card">
    //           <figure className="image">
    //             <img src={image} alt={name} />
    //           </figure>
        
    //           <section className="details">
    //             <h4>{name}</h4>
    //             <p>{year} - {genres}</p>
    //           </section>
        
    //           <footer className="extra">
    //             <button className="thumbsup" onClick={handleClap}>
    //               👍🏼{thumbsUp}
    //             </button>
    //             <button className="watchlistbtn" onClick={() => handleFavClicks(show)}>
    //               ➕ <span>WATCHLIST</span>
    //                 {/* {thumbsUp} */}
    //             </button>
    //           </footer>
    //         </li>
    //       );
    //     };
        
        
    //     export default Card;