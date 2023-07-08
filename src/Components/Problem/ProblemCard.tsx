import {Problem} from "./ProblemType";

function ProblemCard(props : Problem) {
    const URL : string = "https://leetcode.com/problems/" + props.slug + "/"
    return (
      <a href={URL} style={{ textDecoration: 'none', color: 'black' }}>{props.name}</a>
    )
  }
  
  export default ProblemCard;