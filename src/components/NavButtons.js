import React, {useContext} from 'react';
import { Context } from "../context/app-context";


function NavButtons(){
  const {toggleNew, setToggleNew, toggleEdit, setToggleEdit, selectedObj, setSelectedObj} = useContext(Context);
  return (
    <>
      {selectedObj === "" ? 
      <button onClick={()=>{setToggleNew(!toggleNew);}}>{toggleNew ? "Back": "New Form"}</button> 
      : 
      <button onClick={()=>{setToggleEdit(!toggleEdit);}}>{toggleEdit ? "Back": "Edit CRUD"}</button>  }
      {selectedObj !== "" ?
        <button onClick={()=> {
          setSelectedObj(""); 
          setToggleEdit(false);
          setToggleNew(false);
        }}>Back to List</button> :
        null }
    </>
  )
}

export default NavButtons;