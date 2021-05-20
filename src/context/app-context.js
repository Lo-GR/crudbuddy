import React, { useState } from "react";

const Context = React.createContext();

function ContextProvider({children}){
  const [cruds, setCruds] = useState({});
  const [toggleNew, setToggleNew] = useState(false);
  const [selectedObj, setSelectedObj] = useState("");
  const [toggleEdit, setToggleEdit] = useState(false);
  const [animate, setAnimate] = useState(0);
  const [mascot, setMascot] = useState(`
    @
  <{}>
  /  | `)
  const [mascotPose, setMascotPose] = useState({
    standard: `
    @
  <{}>
  /  | `,
    explain: `
    @
  <{}~*
  /  | `,
    explain2: `
    @
 *~{}~*
  /  |`,
  shrug: `
    @
 *^{}^*
  /  |`,
    joy:`
    @
 ヽ{}ノ
  /  |`
  });
  const [explain, setExplain] = useState(["Welcome to CRUDBuddy, my name is Cruddy. I will be your guide through this site.", "On this site, you can add an object and project in order to create a full CRUD API Controller and Model in ASP .Net. Go ahead and try it!"])
  return (
    <Context.Provider value={{
      cruds: cruds,
      setCruds: setCruds,
      toggleNew: toggleNew,
      setToggleNew: setToggleNew,
      selectedObj: selectedObj,
      setSelectedObj: setSelectedObj,
      toggleEdit: toggleEdit,
      setToggleEdit: setToggleEdit,
      animate: animate,
      setAnimate: setAnimate,
      mascot: mascot,
      setMascot: setMascot,
      mascotPose: mascotPose,
      setMascotPose: setMascotPose,
      explain: explain,
      setExplain: setExplain
    }}>
      {children}
    </Context.Provider>
  )
}

function changePunctuation(name){
  const toArray = name.split(" ");
  const toUpperCaseArray = toArray.map(e => {
    let splitWord = e.split("");
    splitWord[0] = splitWord[0].toUpperCase()
    return splitWord.join("");})
  return toUpperCaseArray.join("");
}

export {ContextProvider, Context, changePunctuation}