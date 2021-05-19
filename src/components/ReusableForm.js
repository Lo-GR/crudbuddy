import React, {useState} from "react";


function ReusableForm(props){
  const [formOptions, setFormOptions] = useState({
    showProp1: false,
    showBtn1: true,
    showProp2: false,
    showBtn2: false,
    showProp3: false,
    showBtn3: false,
    showProp4: false,
    showBtn4: false,
    showProp5: false,
    showBtn5: false,
  })
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
        {formOptions.showBtn1 ? <button onClick={()=>{setFormOptions({...formOptions, showProp1: true, showBtn1: false, showBtn2: true});}}>Add Properties to Object</button> : null}
        {formOptions.showProp1 ?
          <input
            type='text'
            name='property1'
            placeholder='Name of Property in Object' 
            defaultValue="-1"/>
        : null}
        {formOptions.showBtn2 ? <button onClick={()=>{setFormOptions({...formOptions, showProp2: true, showBtn2: false, showBtn3: true});}}>Add Additional Property</button> : null}
        {formOptions.showProp2 ?
          <input
            type='text'
            name='property2'
            placeholder='Name of Property in Object' 
            defaultValue="-1"/>
        : null}
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
        {formOptions.showProp1 ?
          <input
            type="checkbox"
            name="check" />
        : null}
        <button type='submit'>{props.buttonText}</button>
      </form>
    </>
  );
}

export default ReusableForm;