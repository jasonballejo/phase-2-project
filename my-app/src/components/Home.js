import React from "react";
import ShowTitle from "./ShowTitle";

function Home({ searchQuery, setSearchQuery, addShowTitle }) {
    return (
        <div className="title">
            <h1>Welcome to SHOWFLIX!</h1><br />
            <p>Here you will will be able to search the show you want and watch it.</p>
            <p>Don't forget to favorite the shows you want to watch and keep up.</p><br />
            
            <label className="searchlabel">Search</label>
            <input type="text" onChange={e => setSearchQuery(e.target.value)} />
            <ShowTitle addShowTitle={addShowTitle} />
        </div>
    )
}

export default Home;