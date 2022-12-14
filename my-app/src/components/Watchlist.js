import React from "react";
import FavCard from "./FavCard"

function Watchlist({ shows }) {
    const favorites = shows.filter(object => object.isInWatchlist) 

    return (
        <div className="title">
            <h1>Favorites Shows</h1>
            
            <ul className="card">
                {favorites.map(fav => 
                    <FavCard 
                        key={fav.id} 
                        {...fav} 
                        fav={fav}
                />)}
            </ul>
        </div>
    )
}

export default Watchlist;