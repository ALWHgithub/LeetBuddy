import ProblemCard from "../Problem/ProblemCard";
import { Problem } from "../Problem/ProblemType";
import React, { useState,useEffect} from 'react';
import './Popup.css';
import Modal from 'react-modal';
import data from '../../data/leetCode.json'





function Popup(isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>, problems : Array<Problem>, setProblems : React.Dispatch<React.SetStateAction<Problem[]>>) {
    const [inputName, setInputName] = useState('');
    useEffect(() => {Modal.setAppElement('#root');}, []);
    const closeModal = () => {setIsOpen(false);}
    const handleInputChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setInputName(event.target.value);
    };

    const generateRandomProblem = (): Problem => {
        // fetch('http://localhost:3000/', {method: 'POST',headers: {'Content-Type': 'application/json'},body: JSON.stringify(dataToSend)})
        // .then(response => response.json())
        // .then(responseData => {
        //     console.log(responseData)
        //     return responseData;
        // })
        // .catch(error => {
        //     console.error(error);
        // });


        var lo = 0;
        var hi = data.length -1;
        var randomNumber = Math.floor(Math.random() * (hi - lo + 1));
        var randomProblem = data[randomNumber]

        while(randomProblem.isPremium){
            console.log("money")
            lo = 0;
            hi = data.length -1;
            randomNumber = Math.floor(Math.random() * (hi - lo + 1));
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