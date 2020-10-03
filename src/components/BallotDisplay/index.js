import React from 'react';
import ChoiceDisplay from '../ChoiceDisplay';
import CandidateDisplay from '../CandidateDisplay';
import './style.css';


function BallotDisplay(props) {
  return (
    <div className="BallotDisplay">
      { props.controllVot === 'end' ? <div className='EndVote'>FIM</div> : (props.numberVot > 5 ? <CandidateDisplay candidate={props.candidate} /> : <ChoiceDisplay />)} 
    </div>
  );
}

export default BallotDisplay;