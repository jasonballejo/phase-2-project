import React from 'react';

function DarkMode({ onDarkModeClick, isDarkMode  }) {

    return (
        <div>
            <button className='darkbtn' onClick={onDarkModeClick}>
                {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
        </div>
    )
}


export default DarkMode;