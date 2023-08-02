import {Problem} from "./ProblemType";
import { useSelector, useDispatch } from 'react-redux';
import  {AppState}  from '../../store/rootReducer'

function SearchedProblemCard(props : {problem : Problem, addToList: React.Dispatch<React.SetStateAction<Problem[]>>}) {
    const URL : string = "https://leetcode.com/problems/" + props.problem.slug + "/"
    return (
      <div>
        <a href={URL} style={{ textDecoration: 'none', color: 'black' }}>{props.problem.name}</a>
        <button>add</button>
      </div>
    )
  }
  
  export default SearchedProblemCard;