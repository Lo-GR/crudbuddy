import React, {useContext} from 'react';
import NavButtons from './NavButtons';
import NewForm from "./NewForm";
import { Context } from "../context/app-context";


function Nav(){
  const {toggleNew} = useContext(Context);
  
  return (
    <>
      {toggleNew ? <NewForm /> : null}
      <NavButtons />
    </>
  )
}

export default Nav;