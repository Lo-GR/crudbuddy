import React, {useContext} from 'react';
import NavButtons from './NavButtons';
import NewForm from "./NewForm";
import EditForm from "./EditForm";
import { Context } from "../context/app-context";


function Nav(){
  const {toggleNew, selectedObj, toggleEdit} = useContext(Context);
  
  return (
    <>
      {toggleNew && selectedObj === "" ? <NewForm /> : null}
      {toggleEdit ? <EditForm /> : null}
      <NavButtons />
    </>
  )
}

export default Nav;