import React from 'react';
import returnSource from '../data/cSourceCode';

function List(){
  const testProj = "ParkAPI";
  const testObj ="State"
  const textToDisplay = returnSource(testProj, testObj);
  return (
    <>
    <p>{textToDisplay}</p>
    </>
  )
}

export default List;