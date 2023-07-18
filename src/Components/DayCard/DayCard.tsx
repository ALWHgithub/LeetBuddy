import ProblemCard from "../Problem/ProblemCard";
import { Problem } from "../Problem/ProblemType";
import React, { useState,useEffect} from 'react';
import './DayCard.css';
import Modal from 'react-modal';
import Popup from "../Popup/Popup";

function DayCard(props : {date :Date}) {
    const [problems, setProblems] = useState(Array<Problem>)
    const [isOpen, setIsOpen] = useState(false);
    

    let today = props.date;
    let day = today.getDay();
    let month = today.getDate();
    
    const openModal = () => {setIsOpen(true);}
    useEffect(() => {Modal.setAppElement('#root');}, []);


    return (
      <div>
        <div>
          <p>{day + "/" + month}</p>
          {problems.map((item, index) => (
          <li key={item.id}>
           <ProblemCard problem={item}/>
            </li>
          ))}
          </div>
          
          <div>
            <button onClick={openModal}> Open Modal</button>
          </div>
          {Popup(isOpen,setIsOpen,problems,setProblems)}
      </div>
      
    )
  }
  
  export default DayCard;