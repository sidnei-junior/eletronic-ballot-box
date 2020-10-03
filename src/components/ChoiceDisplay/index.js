import React from 'react';
import './style.css';


function ChoiceDisplay(props) {
  return (
    <div className="ChoiceDisplay">
      <div id='electoralOffice'>Vereador</div>
      <ul id='numberVot'>
        <li id='number1' className='numberVot'></li>
        <li id='number2' className='numberVot'></li>
        <li id='number3' className='numberVot'></li>
        <li id='number4' className='numberVot'></li>
        <li id='number5' className='numberVot'></li>
      </ul>
    </div>
  );
}

export default ChoiceDisplay;