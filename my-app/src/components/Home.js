import React from "react";
import Card from "./Card";

function Home({ shows, updateItem, handleWatchListItem }) {
    return (
        <div className="title">
            <h1>Welcome to SHOWFLIX!</h1><br />
            <p>Top movies you love to watch! Just add to you watchlist to preview!</p>
                <br/>
            <ul className="card">
                {shows.map(show => 
                    <Card  
                        key={show.id} 
                        {...show} 
                        show={show}
                        updateItem={updateItem}
                        handleWatchListItem={handleWatchListItem}
                    />)}
            </ul>
        </div>
        
    )
}

export default Home;