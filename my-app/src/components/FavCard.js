import { useState } from "react";
import Watchlist from "./Watchlist";

function Card2 ({ id, name, type, image, summary, year, genres, show, 
  // handleDeleteClick 
}) {
    const [thumbsUp, setThumbsUp] = useState(0);

    const handleClap = () => setThumbsUp(thumbsUp + 1);

  return (
    <li className="favcard">
      <figure className="favimage">
        <img src={image} alt={name} />
      </figure>

      <footer className="extra">
        <button className="thumbsup" onClick={handleClap}>
          👍🏼{thumbsUp}
        </button>
        <button className="watchlistbtn" 
          // onClick={() =>  handleDeleteClick(show)}
        >
          ➖ <span>WATCHLIST</span>
            {/* {thumbsUp} */}
        </button>
      </footer>
    </li>
  );
};


export default Card2;