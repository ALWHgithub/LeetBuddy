import {Problem} from "./ProblemType";


function ProblemCard(props : {problem : Problem}) {
    const URL : string = "https://leetcode.com/problems/" + props.problem.slug + "/"
    return (
      <a href={URL} style={{ textDecoration: 'none', color: 'black' }}>{props.problem.name}</a>
    )
  }
  
  export default ProblemCard;