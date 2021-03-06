import React from "react";
import Header from "./Header";
import Content from "./Content";
import Grid from '@material-ui/core/Grid';
import Nav from "./Nav";
import Mascot from './Mascot'
import Footer from "./Footer"

function App(){
  return (
    <>
      <Header />
      <Mascot />
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
      <Footer />
    </>
  )
}

export default App;