import React, {useContext, useState} from 'react';
import { Context } from "../context/app-context";


function Mascot(){
  const {mascot, explain, setMascot, mascotPose} = useContext(Context);
  const [text, setText] = useState(false)
  return (
    <>
      <pre className="mascot">
      {mascot}
      </pre>
      <div className="explanationText"><p>{text ? explain[0] : explain[1]}<button onClick={()=>{setText(!text); setMascot(mascotPose.explain)}}>Next</button></p></div>
    </>
  )
}

export default Mascot;