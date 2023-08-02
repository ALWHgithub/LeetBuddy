import {Problem} from "./ProblemType";
import { useSelector, useDispatch } from 'react-redux';
import  {AppState}  from '../../store/rootReducer'
import ToggleButton from '../../utils/ToggleButton'
import { useState } from "react";

function ProblemCard(props : {problem : Problem}) {
    const [solved, setSolved] = useState(false)
    const URL : string = "https://leetcode.com/problems/" + props.problem.slug + "/"
    
    
    const recentlySolved = useSelector((state: AppState) => state.solved);
    const dispatch = useDispatch()
    const handleButtonClick = (value : number) => {
      if(solved) {
        dispatch({ type: 'PULL', value: value });
        setSolved(false);
      } else {
        dispatch({ type: 'PUSH', value: value });
        setSolved(true);
      }
    };
    
    console.log(recentlySolved.solved)
    return (
      <div style={{display: "flex",alignItems: 'center',justifyContent: 'center',width: 1000}}>
        <a onClick={() => window.open(URL, '_blank')} style={{ textDecoration: 'none', color: 'black' }}>{props.problem.name}</a>
        <ToggleButton solved={solved} func={() => handleButtonClick(props.problem.id)}/>
      </div>
    )
  }
  
  export default ProblemCard;