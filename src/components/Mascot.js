import React from 'react';


function Mascot(){
  const mascot = `
    @
  <{}>
  /  | `
  return (
    <>
      <pre className="mascot">
      {mascot}
      </pre>
    </>
  )
}

export default Mascot;