import React from 'react';
import './style.css';

function NumberButton(props) {

  const handleClickVot = () => props.handleClickVot(props.number);

  return (
    <div onClick={ handleClickVot } className="NumberButton">
      <span>{props.number}</span>
      <span className="braille">{props.number}</span>
    </div>
  );
}

export default NumberButton;