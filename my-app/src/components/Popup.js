import React from 'react'

function Popup({ trigger, setTrigger, name, summary, image }) {
  return (trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            <img className="popimage" src={image}/>
           
            <div className="rightsidecolumn">
                <h2>{name}</h2>
                <h5>Type: Animation ◦ Language: English </h5>
                <h5>Genres: Comedy ◦ Year: 2022</h5>
                <p>{summary}</p>
            </div>

            <div className='footerpopup'>
                <button 
                    className='close-btn' 
                    onClick={() => setTrigger(false)}
                >
                    close
                </button>
                {/* { props.children } */}
            </div>
        </div>
    </div>
  ) : "";
}

export default Popup