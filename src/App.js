import React, { useState } from 'react';
import './App.css';
import BallotDisplay from './components/BallotDisplay';
import BallotKeyboard from './components/BallotKeyboard';

import ReactAudioPlayer from 'react-audio-player';
import clickBallot from './sounds/clickBallot.mp3';
import confirmBallot from './sounds/confirmBallot.mp3';

function App() {
  let [ controllVot, setControllVot ] = useState('councilor');
  let [ candidate, setCandidate ] = useState(0);
  let [ numberVot, setNumberVot ] = useState(1);

  const handleSetCandidate = (number, reset) => {
    if(reset) setCandidate(number)
    if(!reset) setCandidate(candidate+number);
  }

  return (
    <div className="App">
        <BallotDisplay numberVot={numberVot} candidate={candidate} controllVot={controllVot} />
        <BallotKeyboard numberVot={numberVot} setNumberVot={setNumberVot} 
                        controllVot={controllVot} setControllVot={setControllVot} 
                        setCandidate={handleSetCandidate} />

        <ReactAudioPlayer id='ReactAudioPlayer' src={clickBallot} />
        <ReactAudioPlayer id='ReactAudioPlayerConfirm' src={confirmBallot} />
        <div className="simulator-ballot-box">Simulação de Urna Eletrônica</div>
    </div>
  );
}

export default App;
