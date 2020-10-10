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
    if(props.controllVot === 'councilor') {
      props.setCandidate(getNumberCandidateCouncilor(clickNumber, props.numberVot), false);
    }

    if(props.controllVot === 'major')  {
      props.setCandidate(getNumberCandidateMajor(clickNumber, props.numberVot), false);
    }
      
      document.getElementById('number' + props.numberVot + props.controllVot).textContent = clickNumber;
      props.setNumberVot(turnNumberVot());
  }

  const turnNumberVot = () => {
    return props.numberVot + 1;
  }

  const getNumberCandidateCouncilor = (clickNumber, numberVot) => {
    if (numberVot === 1) return clickNumber * 10000;
    if (numberVot === 2) return clickNumber * 1000;
    if (numberVot === 3) return clickNumber * 100;
    if (numberVot === 4) return clickNumber * 10;
    return clickNumber;
  }

  const getNumberCandidateMajor = (clickNumber, numberVot) => {
    if (numberVot === 1) return clickNumber * 10;
    return clickNumber;
  }

  const handleClickAction = clickAction => {
    if (clickAction === 'BRANCO') whiteAction();
    if (clickAction === 'CORRIGE') CorrectAction();
    if (clickAction === 'CONFIRMA') ConfirmAction();

  }

  const whiteAction = () => {
    document.getElementById('ReactAudioPlayer').play();
  }

  const CorrectAction = () => {
    document.getElementById('ReactAudioPlayer').play();
    if(props.controllVot === 'councilor') {
      if(props.numberVot <= 5) clearTypedNumbersCouncilor();
    }

    if(props.controllVot === 'major')  {
      if(props.numberVot <= 2) clearTypedNumbersMajor();
    }
    props.setCandidate(0, true)
    props.setNumberVot(1);
    if(props.controllVot === 'end') props.setControllVot('councilor');

  }

  const clearTypedNumbersCouncilor = () => {
      document.getElementById('number1councilor').textContent = '';
      document.getElementById('number2councilor').textContent = '';
      document.getElementById('number3councilor').textContent = '';
      document.getElementById('number4councilor').textContent = '';
      document.getElementById('number5councilor').textContent = '';
  }

  const clearTypedNumbersMajor = () => {
      document.getElementById('number1major').textContent = '';
      document.getElementById('number2major').textContent = '';
  }

  const ConfirmAction = () => {
    document.getElementById('ReactAudioPlayerConfirm').play();
    if(props.numberVot > 5 && props.controllVot === 'councilor') {
        props.setCandidate(0, true);
        props.setNumberVot(1);
        props.setControllVot('major');
    }

    if(props.numberVot > 2 && props.controllVot === 'major') {
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