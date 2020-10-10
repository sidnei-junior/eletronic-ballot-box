import React from 'react';
import './style.css';
import candidates from '../../database'


function MajorDisplay(props) {
  let candidateDate = candidates.find(candidate => candidate.number === props.candidate);
  if (candidateDate) {

  }
  return (
    <div className="MajorDisplay">
      <div className="item titleM">SEU VOTO PARA</div>
	    <div className="item officeM">{ candidateDate ? candidateDate.office : '-' }</div>
	    <div className="item imageM">{candidateDate ? <img src={candidateDate.img} alt={candidateDate.name}/>:''}</div>
	    <div className="item datasM">
        <ul>
          <li>Número: { candidateDate ? candidateDate.number : '-' }</li>
          <li>Nome: { candidateDate ? candidateDate.name : '-' }</li>
          <li>Partido: { candidateDate ? candidateDate.party : '-' }</li>
        </ul>
      </div>
      <div className="item imageVM">{candidateDate ? <img src={candidateDate.imgV} alt={candidateDate.name}/>:''}</div>
      
    </div>
  );
}

export default MajorDisplay;