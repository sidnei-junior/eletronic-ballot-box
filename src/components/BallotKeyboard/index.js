import React from 'react';
import './style.css';
import NumberButton from '../NumberButton'
import ActionButton from '../ActionButton'


function BallotKeyboard(props) {
  const numberButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const actionButton = ['BRANCO', 'CORRIGE', 'CONFIRMA'];
  

  const handleClickVot = clickNumber => {
    document.getElementById('ReactAudioPlayer').play();
    if (props.numberVot <= 5) changeNumber(clickNumber);
  }

  const changeNumber = clickNumber => {
      props.setCandidate(getNumberCandidate(clickNumber, props.numberVot), false);
      console.log('number' + props.numberVot)
      document.getElementById('number' + props.numberVot).textContent = clickNumber;
      props.setNumberVot(turnNumberVot());
  }

  const turnNumberVot = () => {
    return props.numberVot + 1;
  }

  const getNumberCandidate = (clickNumber, numberVot) => {
    if (numberVot === 1) return clickNumber * 10000;
    if (numberVot === 2) return clickNumber * 1000;
    if (numberVot === 3) return clickNumber * 100;
    if (numberVot === 4) return clickNumber * 10;
    return clickNumber;
  }

  const handleClickAction = clickAction => {
    if (clickAction === 'BRANCO') whiteAction();
    if (clickAction === 'CORRIGE') CorrectAction();
    if (clickAction === 'CONFIRMA') ConfirmAction();

  }

  const whiteAction = () => {
    console.log('Que feio votando em BRANCO');
    document.getElementById('ReactAudioPlayer').play();
  }

  const CorrectAction = () => {
    document.getElementById('ReactAudioPlayer').play();
    props.setCandidate(0, true)
    props.setNumberVot(1);
    props.setControllVot('councilor');

  }

  const ConfirmAction = () => {
    
    if(props.numberVot > 5) {
      document.getElementById('ReactAudioPlayerConfirm').play();
      props.setControllVot('end');
    }
  }

  return (
    <div className="BallotKeyboard">
      <div className='NumberKeyboard'>
        {numberButtons.map(button => <NumberButton number={button} handleClickVot={handleClickVot} key={button} />)}
      </div>
      <div className='ActionKeyboard'>
        {actionButton.map(button => <ActionButton action={button} handleClickAction={handleClickAction} key={button} />)}
      </div>
    </div>
  );
}

export default BallotKeyboard;