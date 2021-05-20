import React, {useContext} from 'react';
import { Context } from "../context/app-context";


function Mascot(){
  const {mascot, explain, setMascot, mascotPose, text, setText} = useContext(Context);
  return (
    <>
      <pre className="mascot">
      {mascot}
      </pre>
      <div className="explanationText"><p>{text ? explain[1] : explain[0]}<button onClick={()=>{setText(!text); setMascot(mascotPose.explain)}}>{text ? "Back" : "Next"}</button></p></div>
    </>
  )
}

export default Mascot;