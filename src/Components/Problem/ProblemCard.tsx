import {Problem} from "./ProblemType";

function ProblemCard(props : Problem) {
    return (
    <p>{props.name}</p>
    )
  }
  
  export default ProblemCard;