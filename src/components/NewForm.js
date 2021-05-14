import React, {useContext} from 'react';
import ReusableForm from "./ReusableForm";
import {Context} from "../context/app-context";
import {v4} from 'uuid';


function NewForm(){
  const {cruds, setCruds} = useContext(Context);
  function submitNew (event){
    event.preventDefault();
    const id = v4();
    setCruds({
      ...cruds,
      [id]: {
        // split and join used to remove spaces
        projName: event.target.projName.value.split(" ").join(""),
        objName: event.target.objName.value.split(" ").join(""),
        id: id
      }
    })
  }
  return (
    <>
      <ReusableForm formSubmissionHandler={submitNew} buttonText="Submit New CRUD" />
    </>
  )
}

export default NewForm;