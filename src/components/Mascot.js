import React, {useContext} from 'react';
import { Context } from "../context/app-context";


function Mascot(){
  const {mascot, setMascot, mascotPose} = useContext(Context)
  return (
    <>
      <pre className="mascot">
      {mascot}
      </pre>
    </>
  )
}

export default Mascot;