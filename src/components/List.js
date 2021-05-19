import React, {useContext} from 'react';
import { Context } from "../context/app-context";


function List(){
  const {cruds, setSelectedObj, setAnimate} = useContext(Context);
  const list = Object.values(cruds).map((crud)=>
      <div className="listItem" onClick = {() => {setSelectedObj(crud.id); setAnimate(1)}} key = {crud.id} >
        <h2> Object: {crud.objName} | Project: {crud.projName}</h2>
      </div>
    )
  return (
    <>
      {Object.keys(cruds).length === 0 ? <h2 className="noCrud">No CRUD Created</h2> : list}
    </>
  )
}

export default List;