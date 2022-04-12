import parse from "html-react-parser";

const TriviaCard = (props) => {

    /*Function to update background based on selected answer*/
    const getClassNames = (answer) => {
        let classNames = 'answer';

        if (props.answersChecked) {
            if (answer === props.data.correct_answer) {
                classNames += ' correct';
            } else if (answer !== props.data.correct_answer && answer === props.data.selectedAnswer) {
                classNames += ' wrong other'
            } else {
                classNames += ' other'
            }

        } else {
            if (props.data.selectedAnswer === answer) {
                classNames += ' selected'
            } else {
                classNames = 'answer';
            }
        }
       
        return classNames
    }
    return (
        <div className="trivia-card">
            <p className="question">{props.data && parse(props.data.question)}</p>
            <ul className="answers">
                {
                    props.data && [...props.data.incorrect_answers, props.data.correct_answer].map((answer, index) => (
                        <li className={getClassNames(answer)}  key={index} onClick={() => {props.getSelectedAnswer(props.index, answer)}}>{parse(answer)}</li>
                ))
                }
            </ul>
            <hr/>
        </div>
    )
}

export default TriviaCard;