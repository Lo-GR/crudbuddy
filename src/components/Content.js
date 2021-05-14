import React, {useContext} from 'react';
import List from './List';
import Details from "./Details";
import { Context } from "../context/app-context";

function Content(){
  const {toggleList} = useContext(Context)
  return (
    <>
      {toggleList ? <List /> : <Details />}
    </>
  )
}

export default Content;