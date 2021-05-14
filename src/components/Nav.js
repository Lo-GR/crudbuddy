import React, {useContext} from 'react';
import NavButtons from './NavButtons';
import NewForm from "./NewForm";
import { Context } from "../context/app-context";


function Nav(){
  const {toggleNew, selectedObj} = useContext(Context);
  
  return (
    <>
      {toggleNew && selectedObj === "" ? <NewForm /> : null}
      <NavButtons />
    </>
  )
}

export default Nav;