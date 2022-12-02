import React from "react";
// import ShowTitle from "./ShowTitle";
import Card from "./Card";

function Home({ show }) {
    // console.log(shows)

    // const listShows = shows.map((show) => (
    //     <Card key={show.id} {...show} />
    // ))

    // const handleOnChange = (e) => setSearchQuery(e.target.value)

    return (
        <div className="title">
            <h1>Welcome to SHOWFLIX!</h1><br />
            <p>Here you will will be able to search the show you want and watch it.</p>
            <p>Don't forget to favorite the shows you want to watch and keep up.</p><br />
            
            <ul className="card">
                {show.map(showList => 
                    <Card key={showList.id} {...showList} />)}
            </ul>
        </div>
    )
}

export default Home;