import React, { useState } from "react";

const Context = React.createContext();

function ContextProvider({children}){
  const [cruds, setCruds] = useState({});
  const [toggleNew, setToggleNew] = useState(false);
  const [toggleList, setToggleList] = useState(true);
  const [selectedObj, setSelectedObj] = useState("");
  return (
    <Context.Provider value={{
      cruds: cruds,
      setCruds: setCruds,
      toggleNew: toggleNew,
      setToggleNew: setToggleNew,
      toggleList: toggleList,
      setToggleList: setToggleList,
      selectedObj: selectedObj,
      setSelectedObj: setSelectedObj
    }}>
      {children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}