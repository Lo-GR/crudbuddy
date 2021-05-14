import React from 'react';
import returnSource from '../data/cSourceCode';

function List(){
  const testProj = "ParkAPI";
  const testObj ="State"
  const textToDisplay = returnSource(testProj, testObj);
  return (
    <>
      <pre>
        <code>
            {textToDisplay}
        </code>
      </pre> 
    </>
  )
}

export default List;