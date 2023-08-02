import { useEffect, useState } from "react";

function ToggleButton(props :
    {
        solved : boolean,
        func : () => void,
    }) {
    const [text, setText] = useState("Add to Solved")

    useEffect(() => {
      if(!props.solved){
        setText("Add to Solved")
      } else {
        setText("Remove Solved")
      }
    },[props.solved]);

    return (
      <div>
        <button onClick={props.func}>{text}</button>
      </div>
    )
  }
  
  export default ToggleButton;