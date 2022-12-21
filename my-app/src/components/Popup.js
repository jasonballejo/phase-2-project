import React from 'react'

function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            <img className="popimage" src="https://static.tvmaze.com/uploads/images/original_untouched/423/1058261.jpg"/>
           
            <div className="rightsidecolumn">
                <h2>The Simpsons</h2>
                <h5>Type: Animation ◦ Language: English </h5>
                <h5>Genres: Comedy ◦ Year: 2022</h5>
                <p>Family Guy follows Peter Griffin the endearingly ignorant dad, and his hilariously offbeat family of middle-class New Englanders in Quahog, RI. Lois is Peter's wife, a stay-at-home mom with no patience for her family's antics.</p>
            </div>

            <div className='footerpopup'>
                <button 
                    className='close-btn' 
                    onClick={() => props.setTrigger(false)}
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