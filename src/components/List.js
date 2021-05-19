import React, {useContext} from 'react';
import { Context } from "../context/app-context";


function List(){
  const {cruds, setSelectedObj} = useContext(Context);
  return (
    <>
      {Object.values(cruds).map((crud)=>
        <div className="listItem" onClick = {() => setSelectedObj(crud.id)} key = {crud.id} >
          <h2> Object: {crud.objName} | Project: {crud.projName}</h2>
        </div>
      )}
    </>
  )
}

export default List;