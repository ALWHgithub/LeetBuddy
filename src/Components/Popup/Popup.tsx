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

    console.log(data.length);

    const handleInputChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setInputName(event.target.value);
    };

    const generateRandomProblem = () => {

        const dataToSend = {
            // Your data to send to the server
            key1: 'value1',
            key2: 'value2',
            // ...
          };

        fetch('http://localhost:3000/', {method: 'POST',headers: {'Content-Type': 'application/json'},body: JSON.stringify(dataToSend)})
        .then(response => response.json())
        .then(data => {
            console.log(data.data.question);
        })
        .catch(error => {
            console.error(error);
        });
    }

    const addRandomProblem = () => {
        generateRandomProblem();
        const lo = 0;
        const hi = data.length -1;
        const randomNumber = Math.floor(Math.random() * (hi - lo + 1));

        const randomProblem = data[randomNumber]

        setProblems([...problems, { id: randomProblem.id, title: randomProblem.name, url: "https://example.com", solved: false }]);
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