import ProblemCard from "../Problem/ProblemCard";
import { Problem } from "../Problem/ProblemType";
import React, { useState } from 'react';
import './DayCard.css';
import Modal from 'react-modal';

function DayCard( {date} : {date : Date}) {
    const [problems, setProblems] = useState(Array<Problem>)
    const [inputName, setInputName] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    
    const handleInputChange = (event : React.ChangeEvent<HTMLInputElement>) => {
      setInputName(event.target.value);
    };

    var today = date;
    var day = today.getDay();
    var month = today.getDate();
    
    function addProblem(){
      setProblems([...problems, { id: 1, title: inputName, url: "https://example.com", solved: false }]);
      setIsOpen(false);
    }

    const closeModal = () => {
      setIsOpen(false);
    };


    return (
      <div>
        <div>
          <p>{day + "/" + month}</p>
          {problems.map((item, index) => (
          <div key={index}> {ProblemCard(item)}</div>
          ))}
          </div>
          
          <div>
            <button onClick={() => {setIsOpen(true)}}> Open Modal</button>
          </div>
          <Modal isOpen={isOpen} onRequestClose={closeModal} className="modal-content">
            <h2>Modal Content</h2>
            <input type="text" value={inputName} onChange={handleInputChange} />
            <button onClick={closeModal}>Close Modal</button>
            <div>
            <button onClick={addProblem}> Add problem</button>
          </div>
          </Modal>
      </div>
      
    )
  }
  
  export default DayCard;