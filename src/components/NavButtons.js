import React, {useContext} from 'react';
import { Context } from "../context/app-context";


function NavButtons(){
  const {toggleNew, setToggleNew} = useContext(Context);
  return (
    <>
      <button onClick={()=>{setToggleNew(!toggleNew);}}>New Form</button>
    </>
  )
}

export default NavButtons;