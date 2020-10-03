import React from 'react';
import './style.css';
import candidates from '../../database'


function CandidateDisplay(props) {
  let candidateDate = candidates.find(candidate => candidate.number === props.candidate);
  if (candidateDate) {

  }
  return (
    <div className="CandidateDisplay">
      <div className="item title">SEU VOTO PARA</div>
	    <div className="item office">{ candidateDate ? candidateDate.office: '-' }</div>
	    <div className="item image">{candidateDate ? <img src={candidateDate.img} alt={candidateDate.name}/>:''}</div>
	    <div className="item datas">
        <ul>
          <li>Número: { candidateDate ? candidateDate.number : '-' }</li>
          <li>Nome: { candidateDate ? candidateDate.name : '-' }</li>
          <li>Partido: { candidateDate ? candidateDate.party : '-' }</li>
        </ul>
      </div>
      
    </div>
  );
}

export default CandidateDisplay;