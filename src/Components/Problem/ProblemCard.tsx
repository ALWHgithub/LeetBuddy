import {Problem} from "./ProblemType";

function ProblemCard(props : Problem) {
    return (
    <p>{props.title}</p>
    )
  }
  
  export default ProblemCard;