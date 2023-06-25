import ProblemCard from "../Problem/ProblemCard";
import { Problem } from "../Problem/ProblemType";
import React, { useState,useEffect} from 'react';
import './Popup.css';
import Modal from 'react-modal';




function Popup(isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>, problems : Array<Problem>, setProblems : React.Dispatch<React.SetStateAction<Problem[]>>) {
    const [inputName, setInputName] = useState('');
    useEffect(() => {Modal.setAppElement('#root');}, []);
    const closeModal = () => {setIsOpen(false);}

    const handleInputChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setInputName(event.target.value);
    };

    const addProblem = () => {
        setProblems([...problems, { id: 1, title: inputName, url: "https://example.com", solved: false }]);
        setIsOpen(false);
    }

    return <Modal isOpen={isOpen} onRequestClose={closeModal} className="modal-content">
    <h2>Modal Content</h2>
    <input type="text" value={inputName} onChange={handleInputChange} />
    <button onClick={closeModal}>Close Modal</button>
    <div>
    <button onClick={addProblem}> Add problem</button>
  </div>
  </Modal>
}



export default Popup