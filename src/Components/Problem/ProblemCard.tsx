import {Problem} from "./ProblemType";

function ProblemCard(props : Problem) {
    return (
    <p>{props.id}</p>
    )
  }
  
  export default ProblemCard;