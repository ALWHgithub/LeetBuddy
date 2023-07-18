import {Problem} from "./ProblemType";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../store/rootReducer";

function ProblemCard(props : {problem : Problem}) {
    const URL : string = "https://leetcode.com/problems/" + props.problem.slug + "/"
    const recentlySolved = useSelector((state: RootState) => state.recentlySolved);
    console.log(recentlySolved)
    return (
      <div>
        <a href={URL} style={{ textDecoration: 'none', color: 'black' }}>{props.problem.name}</a>
      </div>
      
    )
  }
  
  export default ProblemCard;