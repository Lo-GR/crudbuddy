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
        projName: event.target.projName.value,
        objName: event.target.objName.value,
        id: id
      }
    })
    Object.values(cruds).map((crud)=>{
      console.log(crud.projName)
      console.log(crud.objName)
    })
  }
  return (
    <>
      <ReusableForm formSubmissionHandler={submitNew} />
    </>
  )
}

export default NewForm;