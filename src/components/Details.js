import React, {useContext, useState} from 'react';
import { Context } from "../context/app-context";
import * as code from '../data/cSourceCode';

function Details(){
  const [detailView, setDetailView] = useState(true);
  const {selectedObj, cruds} = useContext(Context);
  const crudToDisplay = cruds[selectedObj];
  const controller = code.returnController(crudToDisplay.projName, crudToDisplay.objName, crudToDisplay.properties, crudToDisplay.queries);
  const model = code.returnModel(crudToDisplay.projName, crudToDisplay.objName, crudToDisplay.properties)
  return (
    <>
    <button onClick={()=>{setDetailView(false);}}>Models</button>
    <button onClick={()=>{setDetailView(true);}}>Controllers</button>
    <div className="code">
      <pre>
        <code>
            {detailView ? controller : model}
        </code>
      </pre> 
    </div>
    </>
  )
}

export default Details;