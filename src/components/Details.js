import React, {useContext, useState} from 'react';
import { Context } from "../context/app-context";
import * as code from '../data/cSourceCode';

function Details(){
  const [detailView, setDetailView] = useState(true);
  const {selectedObj, cruds} = useContext(Context);
  const crudToDisplay = cruds[selectedObj];
  const controller = code.returnController(crudToDisplay.projName, crudToDisplay.objName);
  return (
    <>
    <button onClick={()=>{setDetailView(!detailView);}}>test</button> 
      <pre>
        <code>
            {detailView ? controller : "test"}
        </code>
      </pre> 
    </>
  )
}

export default Details;