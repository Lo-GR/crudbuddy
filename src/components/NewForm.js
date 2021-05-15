import React, {useContext} from 'react';
import ReusableForm from "./ReusableForm";
import {Context, changePunctuation} from "../context/app-context";
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
        projName: changePunctuation(event.target.projName.value),
        objName: changePunctuation(event.target.objName.value),
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