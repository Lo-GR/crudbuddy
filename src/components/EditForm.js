import React, {useContext} from 'react';
import ReusableForm from "./ReusableForm";
import {Context} from "../context/app-context";

function EditForm(){
  const {cruds, setCruds, selectedObj} = useContext(Context);
  function submitEdit (event){
    event.preventDefault();
    setCruds({
      ...cruds,
      [selectedObj]: {
        // split and join used to remove spaces
        projName: event.target.projName.value.split(" ").join(""),
        objName: event.target.objName.value.split(" ").join(""),
        id: id
      }
    })
  }
  return (
    <>
      <ReusableForm formSubmissionHandler={submitEdit} />
    </>
  )
}

export default EditForm;