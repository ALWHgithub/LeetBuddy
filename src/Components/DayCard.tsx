import ProblemCard from "./Problem/ProblemCard";
import { Problem } from "./Problem/ProblemType";


function DayCard( {date} : {date : Date}) {

    var today = date;
    var day = today.getDay();
    var month = today.getDate();

    var problems : Array<Problem> = [];
    problems.push({ id: 1, title: "Problem 1", url: "https://example.com", solved: false });
    problems.push({ id: 2, title: "Problem 2", url: "https://example.com", solved: true });
    problems.push({ id: 3, title: "Problem 3", url: "https://example.com", solved: false });
    
    return (
      <div>
        <p>{day + "/" + month}</p>
        {problems.map((item, index) => (
        <p key={index}> {ProblemCard(item)}</p>
      ))}
      </div>
    )
  }
  
  export default DayCard;