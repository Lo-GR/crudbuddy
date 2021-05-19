import React, {useState} from "react";


function ReusableForm(props){
  const [formOptions, setFormOptions] = useState({
    showProp1: 0,
    showBtn1: true,
    showProp2: 0,
    showBtn2: false,
    showProp3: 0,
    showBtn3: false,
    showProp4: 0,
    showBtn4: false,
    showProp5: 0,
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
        {formOptions.showBtn1 ? <button onClick={()=>{setFormOptions({...formOptions, showProp1: 1, showBtn1: false, showBtn2: true});}}>Add Properties to Object</button> : null}
        <input
          show={formOptions.showProp1}
          type='text'
          name='property1'
          placeholder='Name of Property in Object' 
          defaultValue="-1"/>
        {formOptions.showBtn2 ? <button onClick={()=>{setFormOptions({...formOptions, showProp2: 1, showBtn2: false, showBtn3: true});}}>Add Additional Property</button> : null}
        <input
          show={formOptions.showProp2}
          type='text'
          name='property2'
          placeholder='Name of Property in Object' 
          defaultValue="-1"/>
        {formOptions.showBtn3 ? <button onClick={()=>{setFormOptions({...formOptions, showProp3: 1, showBtn3: false, showBtn4: true});}}>Add Additional Property</button> : null}
        <input
          show={formOptions.showProp3}
          type='text'
          name='property3'
          placeholder='Name of Property in Object' 
          defaultValue="-1"/>
        {formOptions.showBtn4 ? <button onClick={()=>{setFormOptions({...formOptions, showProp4: 1, showBtn4: false, showBtn5: true});}}>Add Additional Property</button> : null}
        <input
          show={formOptions.showProp4}
          type='text'
          name='property4'
          placeholder='Name of Property in Object' 
          defaultValue="-1"/>
        {formOptions.showBtn5 ? <button onClick={()=>{setFormOptions({...formOptions, showProp5: 1, showBtn5: false});}}>Add Additional Property</button> : null}
        <input
          show={formOptions.showProp5}
          type='text'
          name='property5'
          placeholder='Name of Property in Object' 
          defaultValue="-1"/>
        <small>Only a max of 5 supported</small>
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