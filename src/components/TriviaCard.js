const TriviaCard = (props) => {

    console.log(props.data)

    return (
        <div className="trivia-card">
            <p className="question">{props.data && props.data.question}</p>
            <ul className="answers">
                {
                    props.data && [...props.data.incorrect_answers, props.data.correct_answer].map((answer, index) => (
                        <li className="answer" key={index}>{answer}</li>
                ))
                }
            </ul>
            <hr/>
        </div>
    )
}

export default TriviaCard;