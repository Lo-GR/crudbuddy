import React, {useContext, useState} from 'react';
import { Context } from "../context/app-context";


function Mascot(){
  const {mascot, explain, setMascot, mascotPose} = useContext(Context);
  const [text, setText] = useState(explain[0])
  return (
    <>
      <pre className="mascot">
      {mascot}
      </pre>
      <div className="explanationText"><p>{text}<button onClick={()=>{setText(explain[1]); setMascot(mascotPose.explain)}}>Next</button></p></div>
    </>
  )
}

export default Mascot;