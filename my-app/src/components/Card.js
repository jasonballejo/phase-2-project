import { useState } from "react";

function Card ({ id, name, type, image}) {
    const [thumbsUp, setThumbsUp] = useState(0);

    const handleClap = () => setThumbsUp(thumbsUp + 1);

  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button className="thumbsup" onClick={handleClap}>
          👍🏼{thumbsUp}
        </button>
      </figure>

      <section className="details">
        <h4>Home</h4>
        <p>About</p>
      </section>

      <footer className="extra">
        <span className="badge blue">Phase</span>
      </footer>
    </li>
  );
};


export default Card;