import React, {useState} from 'react';
const StartOverlay = (props) => {
    const [formData, setFormData] = useState({numOfQuestions: 5});

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData(prevFormData => ({...prevFormData, [name]: value}))
    }

    return (
        <div className="overlay">
            <h1 className="title">Quizzical</h1>
            <p className="subtitle">Test your knowledge with some random trivia.</p>
            <div className="input-group">
                <label className="label" htmlFor="numOfQuestions">Number of Questions</label>
                <input className="input" type="number" name="numOfQuestions" onChange={handleInputChange} value={formData.numOfQuestions}/>
            </div>
            <button className="btn btn__start" onClick={() => {props.startGame(formData)}}>Start quiz</button>
        </div>
    )
}

export default StartOverlay;