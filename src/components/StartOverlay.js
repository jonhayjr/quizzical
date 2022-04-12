const StartOverlay = (props) => {
    return (
        <div className="overlay">
            <h1 className="title">Quizzical</h1>
            <p className="subtitle">Some description if needed</p>
            <button className="btn btn__start" onClick={props.toggleStartGame}>Start quiz</button>
        </div>
    )
}

export default StartOverlay;