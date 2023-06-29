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
        const url = "https://leetcode.com/graphql?query={%20question(titleSlug:%20%22two-sum%22)%20{%20questionId%20questionFrontendId%20title%20titleSlug%20isPaidOnly%20difficulty%20likes%20dislikes%20}%20}"
        fetch(url)
        .then(response => {
            
        })
        .catch(error => {
            console.error('Error:', error);
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