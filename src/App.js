import React, {useState, useEffect} from 'react';
import './style.css';

/*Import Components*/  
import StartOverlay from './components/StartOverlay';
import TriviaCard from './components/TriviaCard';
import { attributesToProps } from 'html-react-parser';

const App = () => {
  const [isStarted, setIsStarted] = useState(false); /*Should initialize as false*/
  const [triviaData, setTriviaData] = useState([]);

  useEffect(() => {
    getTriviaData()
  }, [])


  /*Function to goggle isStarted state which shows or hides start overlay*/
  const toggleStartGame = () => {
    setIsStarted(prev => !prev);
  }

  /*Function to get trivia data*/
  const getTriviaData = () => {
    fetch('https://opentdb.com/api.php?amount=5')
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


  return (
    <div className="container">
      {!isStarted && <StartOverlay toggleStartGame={toggleStartGame}/>}
      {isStarted && <div className="trivia-container">
          {triviaData && triviaData.map((item, index) => (
              <TriviaCard key={index} index={index} data={item} getSelectedAnswer={getSelectedAnswer}/>
          ))}
        </div>}
    </div>
  )
}

export default App;
