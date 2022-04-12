import React, {useState} from 'react';
import './style.css';

/*Import Components*/  
import StartOverlay from './components/StartOverlay';

const App = () => {
  const [isStarted, setIsStarted] = useState(false);

  const toggleStartGame = () => {
    setIsStarted(prev => !prev);
  }
  return (
    <div className="container">
      {!isStarted && <StartOverlay toggleStartGame={toggleStartGame}/>}
    </div>
  );
}

export default App;
