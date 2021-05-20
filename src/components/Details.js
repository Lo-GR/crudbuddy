import React, {useContext, useState} from 'react';
import { Context } from "../context/app-context";
import * as code from '../data/cSourceCode';

function Details(){
  const [detailView, setDetailView] = useState("con");
  const {selectedObj, cruds, animate, setAnimate} = useContext(Context);
  const crudToDisplay = cruds[selectedObj];
  const controller = code.returnController(crudToDisplay.projName, crudToDisplay.objName, crudToDisplay.properties, crudToDisplay.queries);
  const model = code.returnModel(crudToDisplay.projName, crudToDisplay.objName, crudToDisplay.properties);
  let objects = []
  for (const [key, value] of Object.entries(cruds)){
    if (value.projName === crudToDisplay.projName){
      objects.push(value.objName)
    }
  }
  const context = code.returnContext(crudToDisplay.projName, objects);
  return (
    <>
    <button onClick={()=>{setDetailView("mod");setAnimate(1);}}>Models</button>
    <button onClick={()=>{setDetailView("con");setAnimate(1);}}>Controllers</button>
    <button onClick={()=>{setDetailView("ctx");setAnimate(1);}}>Context Model</button>
    <div className="code" animate={animate} onAnimationEnd={() => setAnimate(0)}>
      <pre>
        <code>
            {detailView === "con" ? controller : null}
            {detailView === "mod" ? model : null}
            {detailView === "ctx" ? context : null}
        </code>
      </pre> 
    </div>
    </>
  )
}

export default Details;