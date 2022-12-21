import React from 'react'

function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            <img className="popimage" src="https://static.tvmaze.com/uploads/images/original_untouched/423/1058261.jpg"/>
            <h1>The Simpsons</h1>
            <button 
                className='close-btn' 
                onClick={() => props.setTrigger(false)}
            >
                close
            </button>
            { props.children }
        </div>
    </div>
  ) : "";
}

export default Popup