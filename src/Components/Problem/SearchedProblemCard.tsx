import {Problem} from "./ProblemType";
import { useSelector, useDispatch } from 'react-redux';
import  {AppState}  from '../../store/rootReducer'

function SearchedProblemCard(props : {problem : Problem, addToList: () => void}) {
    const URL : string = "https://leetcode.com/problems/" + props.problem.slug + "/"
    return (
      <div>
        <a href={URL} style={{ textDecoration: 'none', color: 'black' }}>{props.problem.name}</a>
        <button onClick={props.addToList}>add</button>
      </div>
    )
  }
  
  export default SearchedProblemCard;