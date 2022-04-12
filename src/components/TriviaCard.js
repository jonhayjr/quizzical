import parse from "html-react-parser";

const TriviaCard = (props) => {

    /*Function to update background based on selected answer*/
    const getStyles = (answer) => {
        return {
            backgroundColor: answer === props.data.selectedAnswer ? '#D6DBF5' : '#fff'
        }
    }
    return (
        <div className="trivia-card">
            <p className="question">{props.data && parse(props.data.question)}</p>
            <ul className="answers">
                {
                    props.data && [...props.data.incorrect_answers, props.data.correct_answer].map((answer, index) => (
                        <li className='answer' style={getStyles(answer)} key={index} onClick={() => {props.getSelectedAnswer(props.index, answer)}}>{parse(answer)}</li>
                ))
                }
            </ul>
            <hr/>
        </div>
    )
}

export default TriviaCard;