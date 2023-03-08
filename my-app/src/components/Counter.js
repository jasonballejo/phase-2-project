import react, {useState } from 'react';

function Counter() {
    const [number, setNumber] = useState(0)
    const [word, setWord] = useState("")

    function handleSubmit (e) {
        e.preventDefault()
        setNumber(word.length)
        
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                >
                </input>
                <button>Click Me!</button>
            </form>

            <h1>{number}</h1>
        </>
    )
}

export default Counter

// Add a controlled form that includes:
    // A text input
    // A button with the text of “Click Me!”
// Below the form: a h1 that has a counter that starts at 0
// When you submit the form,

// the counter should increment based on the number of letters in the word (example: if a user types cat, the counter should increment by 3)

// the input field should also clear
// The counter will continue to increment based on word length and will never reset back to zero. So for example: if a user typed in hi and submitted 3 times, the counter would be at 6.
