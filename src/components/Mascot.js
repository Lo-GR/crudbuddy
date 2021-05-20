import React, {useContext} from 'react';
import { Context } from "../context/app-context";


function Mascot(){
  const {mascot} = useContext(Context)
  return (
    <>
      <pre className="mascot">
      {mascot}
      </pre>
      <div className="explanationText">Testing</div>
    </>
  )
}

export default Mascot;