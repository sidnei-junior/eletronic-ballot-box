import React from 'react';
import './style.css';


function ChoiceDisplay(props) {
  return (
    <div className="ChoiceDisplay">
      <div id='electoralOffice'>Vereador</div>
      <ul id='numberVot'>
        <li id='number1councilor' className='numberVot'></li>
        <li id='number2councilor' className='numberVot'></li>
        <li id='number3councilor' className='numberVot'></li>
        <li id='number4councilor' className='numberVot'></li>
        <li id='number5councilor' className='numberVot'></li>
      </ul>
    </div>
  );
}

export default ChoiceDisplay;