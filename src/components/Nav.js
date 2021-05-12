import React, {useContext} from 'react';
import NavButtons from './NavButtons';
import { Context } from "../context/app-context";


function Nav(){
  const {toggleNew, setToggleNew} = useContext(Context);

  return (
    <>
      <NavButtons />
    </>
  )
}

export default Nav;