import React from "react";


function ReusableForm(props){
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='projName'
          placeholder='Project Namespace' />
        <input
          type='text'
          name='objName'
          placeholder='Name of object' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </>
  );
}

export default ReusableForm;