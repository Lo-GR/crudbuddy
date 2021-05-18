import React from "react";
import Header from "./Header";
import Content from "./Content";
import Grid from '@material-ui/core/Grid';
import Nav from "./Nav";

function App(){
  return (
    <>
      <Header />
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="baseline"
      >
        <Grid container item md={6}>
          <Nav /> 
        </Grid>
        <Grid container item md={6}>
          <Content />
        </Grid>
      </Grid>
    </>
  )
}

export default App;