import React from "react";
import Header from "./Header";
import Content from "./Content";
import Nav from "./Nav";

function App(){
  return (
    <>
      <Header />
      <div className="appContainer">
        <Nav />
        <Content />
      </div>
    </>
  )
}

export default App;