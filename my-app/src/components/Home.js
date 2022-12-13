import React from "react";
// import ShowTitle from "./ShowTitle";
import Card from "./Card";

function Home({ shows, updateItem, favorites, setFavorites, addFavShow }) {
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
                        favorites={favorites}
                        setFavorites={setFavorites}
                        addFavShow={addFavShow}
                    />)}
            </ul>
        </div>
    )
}

export default Home;