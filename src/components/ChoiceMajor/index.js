import React from 'react';
import './style.css';


function ChoiceMajor(props) {
  return (
    <div className="ChoiceMajor">
      <div id='electoralOfficeMajor'>Prefeito e Vice-prefeito</div>
      <ul id='numberVotMajor'>
        <li id='number1major' className='numberVotMajor'></li>
        <li id='number2major' className='numberVotMajor'></li>
      </ul>
    </div>
  );
}

export default ChoiceMajor;