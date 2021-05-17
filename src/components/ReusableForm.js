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
        <input
          type='text'
          name='property1'
          placeholder='Name of Property in Object' 
          defaultValue="-1"/>
        <input
          type='text'
          name='property2'
          placeholder='Name of Property in Object' 
          defaultValue="-1"/>
        <input
          type='text'
          name='property3'
          placeholder='Name of Property in Object' 
          defaultValue="-1"/>
        <input
          type='text'
          name='property4'
          placeholder='Name of Property in Object' 
          defaultValue="-1"/>
        <input
          type='text'
          name='property5'
          placeholder='Name of Property in Object' 
          defaultValue="-1"/>
        <input
          type="checkbox"
          name="check" />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </>
  );
}

export default ReusableForm;