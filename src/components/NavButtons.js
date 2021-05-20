import React, {useContext} from 'react';
import { Context } from "../context/app-context";
import Grid from '@material-ui/core/Grid';


function NavButtons(){
  const {toggleNew, setToggleNew, toggleEdit, setToggleEdit, selectedObj, setSelectedObj, setMascot, mascotPose, explainText, setExplain, setText} = useContext(Context);
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
        <button onClick={()=>{setToggleNew(!toggleNew);setExplain(explainText.newForm); setMascot(mascotPose.standard); setText(false)}}>{toggleNew ? "Back": "New Form"}</button> 
        : 
        <button onClick={()=>{setToggleEdit(!toggleEdit);setText(false);setExplain(explainText.editForm); setMascot(mascotPose.explain2)}}>{toggleEdit ? "Back": "Edit CRUD"}</button>  }
        {selectedObj !== "" ?
          <button onClick={()=> {
            setSelectedObj(""); 
            setToggleEdit(false);
            setToggleNew(false);
            setMascot(mascotPose.shrug);
            setExplain(explainText.backToList);
            setText(false);
          }}>Back to List</button> :
          null }
          </Grid>
      </div>
    </>
  )
}

export default NavButtons;