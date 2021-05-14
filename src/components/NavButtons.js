import React, {useContext} from 'react';
import { Context } from "../context/app-context";


function NavButtons(){
  const {toggleNew, setToggleNew, selectedObj} = useContext(Context);
  return (
    <>
      {selectedObj === "" ? <button onClick={()=>{setToggleNew(!toggleNew);}}>New Form</button> : null }
      <button onClick={()=>{console.log(selectedObj);}}>test</button>
    </>
  )
}

export default NavButtons;
// {toggleNew && selectedObj === "" ? <NewForm /> : null}