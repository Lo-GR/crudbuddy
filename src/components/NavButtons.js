import React, {useContext} from 'react';
import { Context } from "../context/app-context";
import Grid from '@material-ui/core/Grid';


function NavButtons(){
  const {toggleNew, setToggleNew, toggleEdit, setToggleEdit, selectedObj, setSelectedObj, setMascot, mascotPose} = useContext(Context);
  return (
    <>
      <div className="navButts">
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="baseline"
        >
        {selectedObj === "" ? 
        <button onClick={()=>{setToggleNew(!toggleNew); setMascot(mascotPose.explain)}}>{toggleNew ? "Back": "New Form"}</button> 
        : 
        <button onClick={()=>{setToggleEdit(!toggleEdit);}}>{toggleEdit ? "Back": "Edit CRUD"}</button>  }
        {selectedObj !== "" ?
          <button onClick={()=> {
            setSelectedObj(""); 
            setToggleEdit(false);
            setToggleNew(false);
          }}>Back to List</button> :
          null }
          </Grid>
      </div>
    </>
  )
}

export default NavButtons;