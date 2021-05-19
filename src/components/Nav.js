import React, {useContext} from 'react';
import NavButtons from './NavButtons';
import NewForm from "./NewForm";
import EditForm from "./EditForm";
import { Context } from "../context/app-context";
import Grid from '@material-ui/core/Grid';


function Nav(){
  const {toggleNew, selectedObj, toggleEdit} = useContext(Context);
  
  return (
    <>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="baseline"
        >
        <NavButtons />
        {toggleNew && selectedObj === "" ? <NewForm /> : null}
        {toggleEdit ? <EditForm /> : null}
      </Grid>
    </>
  )
}

export default Nav;