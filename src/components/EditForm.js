import React, {useContext} from 'react';
import ReusableForm from "./ReusableForm";
import {Context, changePunctuation} from "../context/app-context";

function EditForm(){
  const {cruds, setCruds, selectedObj} = useContext(Context);
  function submitEdit (event){
    event.preventDefault();
    const propertyArray = [
      changePunctuation(event.target.property1.value), 
      changePunctuation(event.target.property2.value),
      changePunctuation(event.target.property3.value), 
      changePunctuation(event.target.property4.value), 
      changePunctuation(event.target.property5.value)]
    setCruds({
      ...cruds,
      [selectedObj]: {
        // split and join used to remove spaces
        projName: changePunctuation(event.target.projName.value),
        objName: changePunctuation(event.target.objName.value),
        properties: propertyArray,
        queries: event.target.check.checked,
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