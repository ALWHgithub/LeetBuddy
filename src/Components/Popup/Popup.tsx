import React, { useState,useEffect} from 'react';
import './Popup.css';
import Modal from 'react-modal';
import data from '../../data/leetCode.json'
import { Problem } from '../Problem/ProblemType';





function Popup(isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>, problems : Array<Problem>, setProblems : React.Dispatch<React.SetStateAction<Problem[]>>) {
    const [inputName, setInputName] = useState('');
    useEffect(() => {Modal.setAppElement('#root');}, []);
    const closeModal = () => {setIsOpen(false);}
    
    const handleInputChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setInputName(event.target.value);
    };

    const generateRandomProblem = (): Problem => {
        var randomNumber = Math.floor(Math.random() * (data.length));
        var randomProblem = data[randomNumber]

        while(randomProblem.isPremium){ // re-roll if question is premium
            randomNumber = Math.floor(Math.random() * (data.length));
            randomProblem = data[randomNumber]
        }

        return randomProblem;  
    }

    const addRandomProblem = () => {
        const randomProblem: Problem = generateRandomProblem()
        setProblems([...problems, randomProblem]);
        setIsOpen(false);
    }

    return <Modal isOpen={isOpen} onRequestClose={closeModal} className="modal-content">
    <h2>Modal Content</h2>
    <input type="text" value={inputName} onChange={handleInputChange} />
    <button onClick={closeModal}>Close Modal</button>
    <div>
    <button onClick={addRandomProblem}>Add random problem</button>
  </div>
  </Modal>
}



export default Popup