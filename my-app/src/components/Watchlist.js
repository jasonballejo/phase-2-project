import React from "react";
import FavCard from "./FavCard"

function Watchlist({ show, 
    // handleDeleteClick 
    }) {
    return (
        <div className="title">
            <h1>Favorites Shows</h1>
            
            <ul className="card">
                {show.map(show => 
                    <FavCard 
                        key={show.id} 
                        {...show} 
                        show={show}
                        // handleDeleteClick={handleDeleteClick}
                />)}
            </ul>
        </div>
    )
}

export default Watchlist;