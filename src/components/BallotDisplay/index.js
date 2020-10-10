import React from 'react';
import ChoiceDisplay from '../ChoiceDisplay';
import CandidateDisplay from '../CandidateDisplay';
import MajorDisplay from '../MajorDisplay';
import ChoiceMajor from '../ChoiceMajor';
import './style.css';


function BallotDisplay(props) {
  if(props.controllVot === 'end') {
    return (
      <div className="BallotDisplay">
        <div className='EndVote'>FIM</div>
      </div>
    );

  }

  if(props.controllVot === 'major') {
    return (
      <div className="BallotDisplay">
        { props.numberVot > 2 ? <MajorDisplay candidate={props.candidate} /> : <ChoiceMajor /> }
      </div>
    );
  }
  return (
    <div className="BallotDisplay">
      { props.numberVot > 5 ? <CandidateDisplay candidate={props.candidate} /> : <ChoiceDisplay /> }
    </div>
  );
}

export default BallotDisplay;