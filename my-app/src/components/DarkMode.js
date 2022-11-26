import React from 'react';

function DarkMode({ onDarkModeClick, isDarkMode  }) {

    return (
        <div className='darktoggle'>
            <button className='darkmode' onClick={onDarkModeClick}>
                {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
        </div>
    )
}


export default DarkMode;