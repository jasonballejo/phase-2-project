import React from "react";
// import ShowTitle from "./ShowTitle";
import Card from "./Card";

function Home({ show }) {
    return (
        <div className="title">
            <h1>Welcome to SHOWFLIX!</h1><br />
            <p>Top movies you love to watch!</p>
                       
            <ul className="card">
                {show.map(showList => 
                    <Card key={showList.id} {...showList} />)}
            </ul>
        </div>
    )
}

export default Home;