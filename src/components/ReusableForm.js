import React, {useState} from "react";
import Grid from '@material-ui/core/Grid';


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
        <form className="reuseForm" onSubmit={props.formSubmissionHandler}>
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="baseline"
        >
          Name of overall Project this Object belongs to
          <input
            type='text'
            name='projName'
            placeholder='Project Namespace' 
            required />
          Name of Object
          <input
            type='text'
            name='objName'
            placeholder='Name of object' 
            required />
          Add Properties to Object. (optional) 
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
          <input
            show={formOptions.showProp1}
            type="checkbox"
            name="check" 
            className="checkbox"/>
          <label show={formOptions.showProp1} htmlFor="check" value="Check this box if you would like queries in controller" ><small>Check this box if you would like queries in controller</small></label>
          <button type='submit'>{props.buttonText}</button>
          </Grid>
        </form>
    </>
  );
}

export default ReusableForm;