import React from 'react';
import './style.css';

function ActionButton(props) {

  const handleClickAction = () => props.handleClickAction(props.action);

  const ButtonClass = action => {
      if (action === 'BRANCO') return 'ActionButton WhiteButton';
      if (action === 'CORRIGE') return 'ActionButton CorrectButton';
      if (action === 'CONFIRMA') return 'ActionButton ConfirmButton';
      return '';
  }
  return (
    <div onClick={handleClickAction} className={ButtonClass(props.action)}>
      <span>{props.action}</span>
      <span className="braille">{props.action}</span>
    </div>
  );
}

export default ActionButton;