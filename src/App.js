import React, {useState, useEffect} from 'react';
import './style.css';

/*Import Components*/  
import StartOverlay from './components/StartOverlay';
import TriviaCard from './components/TriviaCard';

const App = () => {
  const [isStarted, setIsStarted] = useState(true); /*Should initialzie as false*/
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
    .then(data => setTriviaData(data.results))
  }


  return (
    <div className="container">
      {!isStarted && <StartOverlay toggleStartGame={toggleStartGame}/>}
      <div className="trivia-container">
          {triviaData && triviaData.map((item, index) => (
              <TriviaCard key={index} data={item}/>
          ))}
        </div>
    </div>
  )
}

export default App;
