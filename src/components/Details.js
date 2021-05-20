import React, {useContext, useState} from 'react';
import { Context } from "../context/app-context";
import * as code from '../data/cSourceCode';

function Details(){
  const [detailView, setDetailView] = useState(true);
  const {selectedObj, cruds, animate, setAnimate} = useContext(Context);
  const crudToDisplay = cruds[selectedObj];
  const controller = code.returnController(crudToDisplay.projName, crudToDisplay.objName, crudToDisplay.properties, crudToDisplay.queries);
  const model = code.returnModel(crudToDisplay.projName, crudToDisplay.objName, crudToDisplay.properties)
  return (
    <>
    <button onClick={()=>{setDetailView(false);setAnimate(1);}}>Models</button>
    <button onClick={()=>{setDetailView(true);setAnimate(1);}}>Controllers</button>
    <button onClick={()=>{setDetailView(true);setAnimate(1);}}>Controllers</button>
    <div className="code" animate={animate} onAnimationEnd={() => setAnimate(0)}>
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