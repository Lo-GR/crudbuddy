import React, {useContext} from 'react';
import { Context } from "../context/app-context";


function NavButtons(){
  const {toggleNew, setToggleNew, toggleEdit, setToggleEdit, selectedObj} = useContext(Context);
  return (
    <>
      {selectedObj === "" ? 
      <button onClick={()=>{setToggleNew(!toggleNew);}}>{toggleNew ? "Back": "New Form"}</button> 
      : 
      <button onClick={()=>{setToggleEdit(!toggleEdit);}}>{toggleEdit ? "Back": "Edit CRUD"}</button>  }
      <button onClick={()=>{console.log(selectedObj);}}>test</button>
    </>
  )
}

export default NavButtons;