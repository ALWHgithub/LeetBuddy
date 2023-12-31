import AddedProblemCard from "../Problem/AddedProblemCard";
import { Problem } from "../Problem/ProblemType";
import React, { useState,useEffect} from 'react';
import './DayCard.css';
import Modal from 'react-modal';
import Popup from "../Popup/Popup";
import ProblemSearchBar from "../../components/ProblemSearchBar/ProblemSearchBar";  

function DayCard(props : {date :Date}) {
    const [problems, setProblems] = useState(Array<Problem>)
    const [isOpen, setIsOpen] = useState(false);
    

    let today = props.date;
    let day = today.getDay();
    let month = today.getDate();
    
    const openModal = () => {
      const payload = {slug : "two-sum"};
      setIsOpen(true);
    }
    useEffect(() => {Modal.setAppElement('#root');}, []);

    const addProblem = (newProblem : Problem) => {
      if (!problems.some((obj) => obj.id === newProblem.id)) {
        setProblems([...problems,newProblem])
      }
    }

    return (
      <div>
        <div>
          <p>{day + "/" + month}</p>
          <ProblemSearchBar addToList={addProblem} problems={problems} />
          {problems.map((item, index) => (
          <div key={item.id}>
           <AddedProblemCard problem={item}/>
            </div>
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