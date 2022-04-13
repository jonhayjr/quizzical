import React, {useState} from 'react';
const StartOverlay = (props) => {
    const [formData, setFormData] = useState({numOfQuestions: 5, difficulty: '', category: ''});

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
            <div className="input-group">
                <label className="label" htmlFor="difficulty">Difficulty</label>
                <select className="select" name="difficulty" value={formData.difficulty} onChange={handleInputChange}>
                    <option>-- Select Difficulty --</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>
            <div className="input-group">
                <label className="label" htmlFor="category">Category</label>
                <select name="category" className="select" value={formData.category} onChange={handleInputChange}>
                    <option>-- Select Category --</option>
                    <option value="any">Any Category</option>
                    <option value="9">General Knowledge</option>
                    <option value="10">Entertainment: Books</option>
                    <option value="11">Entertainment: Film</option>
                    <option value="12">Entertainment: Music</option>
                    <option value="13">Entertainment: Musicals &amp; Theatres</option>
                    <option value="14">Entertainment: Television</option>
                    <option value="15">Entertainment: Video Games</option>
                    <option value="16">Entertainment: Board Games</option>
                    <option value="17">Science &amp; Nature</option>
                    <option value="18">Science: Computers</option>
                    <option value="19">Science: Mathematics</option>
                    <option value="20">Mythology</option>
                    <option value="21">Sports</option>
                    <option value="22">Geography</option>
                    <option value="23">History</option>
                    <option value="24">Politics</option>
                    <option value="25">Art</option>
                    <option value="26">Celebrities</option>
                    <option value="27">Animals</option>
                    <option value="28">Vehicles</option>
                    <option value="29">Entertainment: Comics</option>
                    <option value="30">Science: Gadgets</option>
                    <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                    <option value="32">Entertainment: Cartoon &amp; Animations</option>
                </select>
            </div>
            <button className="btn btn__start" onClick={() => {props.startGame(formData)}}>Start quiz</button>
        </div>
    )
}

export default StartOverlay;