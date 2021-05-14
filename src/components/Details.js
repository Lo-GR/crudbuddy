import React, {useContext} from 'react';
import { Context } from "../context/app-context";
import returnSource from '../data/cSourceCode';

function Details(){
  const {selectedObj, setSelectedObj, cruds} = useContext(Context);
  const crudToDisplay = cruds[selectedObj];
  const textToDisplay = returnSource(crudToDisplay.projName, crudToDisplay.objName);
  return (
    <>
      <pre>
        <code>
            {textToDisplay}
        </code>
      </pre> 
      <button onClick={()=> setSelectedObj("")} >Back to List</button>
    </>
  )
}

export default Details;