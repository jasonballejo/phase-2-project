import React from "react";
import FavCard from "./FavCard"

function Watchlist({ shows, handleWatchListItem }) {
    const favorites = shows.filter(object => object.isInWatchlist) 

    return (
        <div className="title">
            <h1>Watchlist</h1>
            
            <ul className="card">
                {favorites.map(fav => 
                    <FavCard 
                        key={fav.id} 
                        {...fav} 
                        fav={fav}
                        show={shows}
                        handleWatchListItem={handleWatchListItem}
                />)}
            </ul>
        </div>
    )
}

export default Watchlist;