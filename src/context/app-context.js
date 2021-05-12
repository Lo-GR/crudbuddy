import React, { useState } from "react";

const Context = React.createContext();

function ContextProvider({children}){
  const [cruds, setCruds] = useState({});
  const [toggleNew, setToggleNew] = useState(false);
  return (
    <Context.Provider value={{
      crudList: cruds,
      setCrudList: setCruds,
      toggleNew: toggleNew,
      setToggleNew: setToggleNew
    }}>
      {children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}