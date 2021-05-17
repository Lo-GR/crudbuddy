import React, {useContext} from 'react';
import ReusableForm from "./ReusableForm";
import {Context, changePunctuation} from "../context/app-context";

function EditForm(){
  const {cruds, setCruds, selectedObj} = useContext(Context);
  function submitEdit (event){
    event.preventDefault();
    setCruds({
      ...cruds,
      [selectedObj]: {
        // split and join used to remove spaces
        projName: changePunctuation(event.target.projName.value),
        objName: changePunctuation(event.target.objName.value),
        id: selectedObj
      }
    })
  }
  return (
    <>
      <ReusableForm formSubmissionHandler={submitEdit} buttonText="Submit Edit"/>
    </>
  )
}

export default EditForm;