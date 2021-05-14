import React, {useContext} from 'react';
import { Context } from "../context/app-context";


function NavButtons(){
  const {toggleNew, setToggleNew} = useContext(Context);
  const {selectedObj} = useContext(Context);
  return (
    <>
      <button onClick={()=>{setToggleNew(!toggleNew);}}>New Form</button>
      <button onClick={()=>{console.log(selectedObj);}}>test</button>
    </>
  )
}

export default NavButtons;