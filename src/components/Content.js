import React, {useContext} from 'react';
import List from './List';
import Details from "./Details";
import { Context } from "../context/app-context";

function Content(){
  const {selectedObj} = useContext(Context)
  return (
    <>
      <div className="content">
        {selectedObj === "" ? <List /> : <Details />}
      </div>
    </>
  )
}

export default Content;