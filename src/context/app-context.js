import React, { useState } from "react";

const Context = React.createContext();

function ContextProvider({children}){
  const [cruds, setCruds] = useState({});
  const [toggleNew, setToggleNew] = useState(false);
  const [selectedObj, setSelectedObj] = useState("");
  const [toggleEdit, setToggleEdit] = useState(false);
  return (
    <Context.Provider value={{
      cruds: cruds,
      setCruds: setCruds,
      toggleNew: toggleNew,
      setToggleNew: setToggleNew,
      selectedObj: selectedObj,
      setSelectedObj: setSelectedObj,
      toggleEdit: toggleEdit,
      setToggleEdit: setToggleEdit
    }}>
      {children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}