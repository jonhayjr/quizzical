import React, {useState, useEffect} from 'react';
import './style.css';

/*Import Components*/  
import StartOverlay from './components/StartOverlay';
import TriviaCard from './components/TriviaCard';

const App = () => {
  const [isStarted, setIsStarted] = useState(false); /*Should initialize as false*/
  const [triviaData, setTriviaData] = useState([]);
  const [answersChecked, setAnswersChecked] = useState(false);
  const [scoreMessage, setScoreMessage] = useState('');
  const [numOfQuestions, setNumberOfQuestions] = useState();
  const [difficulty, setDifficulty] = useState();
  const [category, setCategory] = useState();

  useEffect(() => {
    getTriviaData();
  }, [isStarted])

  /*Function to get isStarted state which shows or hides start overlay*/
  const startGame = (form) => {
    console.log(form)
    console.log(form)
    setNumberOfQuestions(form.numOfQuestions)
    setDifficulty(form.difficulty || 'easy');
    setCategory(form.category || 'any')
    setIsStarted(prev => !prev);
  }

  /*Function to get trivia data*/
  const getTriviaData = () => {
    fetch(`https://opentdb.com/api.php?amount=${numOfQuestions}&difficulty=${difficulty}&category=${category}`)
    .then(res => res.json())
    .then(data => {
      const newData = data.results.map(item => ({...item, selectedAnswer: ''}));
      setTriviaData(newData)
    })
  }

  /*Function to update selected answer value in array*/
  const getSelectedAnswer = (index, answer) => {
    setTriviaData(prevTrivia => {
      const newTrivia = prevTrivia;
      newTrivia[index].selectedAnswer = answer;
      return [...newTrivia]
    })
  }

  /*Function to check score*/ 
  const getScore = () => {
    let correctAnswers = 0;

    triviaData.forEach(item => {
      if (item.selectedAnswer === item.correct_answer) {
        correctAnswers ++;
      }
    })
    const message = `You scored ${correctAnswers}/${triviaData.length} correct answers.`
    setScoreMessage(message)
  }

  /*Function to check answers*/
  const runCheckAnswers = () => {
    /*If answers aren't checked, get score and then update*/
    if (!answersChecked) {
        getScore();
        setAnswersChecked(true);
    } else {
      resetGame();
    }
  }
  
  /*Function to reset game*/
  const resetGame = () => {

    /*Set answers checked to false and score message to blank*/
    setAnswersChecked(false);
    setScoreMessage('');
    setNumberOfQuestions();

    /*Set isStarted to false*/   
    setIsStarted(false)
  }

  return (
    <div className="container">
      {!isStarted ?
       <StartOverlay startGame={startGame}  />
       : 
       triviaData.length === 0 || !triviaData
       ? <p className="loading">Loading...</p>
       :
       <>
        <div className="trivia-container">
            {triviaData && triviaData.map((item, index) => (
                <TriviaCard key={index} index={index} data={item} getSelectedAnswer={getSelectedAnswer} answersChecked={answersChecked}/>
            ))}
          </div>
          <div className="score-section">
            { answersChecked && <p className="score">{scoreMessage}</p>}
            <button className="btn btn_chk-answer" onClick={runCheckAnswers}>{!answersChecked ? 'Check answers' : 'Play again'}</button>
          </div>
        </>
      }
    </div>
  )
}

export default App;
