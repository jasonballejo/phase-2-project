import React from "react";
// import ShowTitle from "./ShowTitle";
import Card from "./Card";

function Home({ shows, updateItem, addFavorites }) {
    return (
        <div className="title">
            <h1>Welcome to SHOWFLIX!</h1><br />
            <p>Top movies you love to watch!</p>

            <ul className="card">
                {shows.map(show => 
                    <Card 
                        key={show.id} 
                        {...show} 
                        show={show}
                        updateItem={updateItem}
                        addFavorites={addFavorites}
                    />)}
            </ul>
        </div>
    )
}

export default Home;