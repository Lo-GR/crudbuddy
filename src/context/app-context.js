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
  const [explain, setExplain] = useState(["Welcome to CRUDBuddy, my name is Cruddy. I will help you build your CRUD API.", "On this site, you can add an object and project in order to create a full CRUD API Controller and Model in ASP .Net. Go ahead and try it!"])
  const [explainText, setExplainText] = useState({
    newForm: ["You can enter a name of your overall project and object name here. If you want, you can also add properties.","Finally, you can check whether you want query parameters for your properties. At this time, I can only add all the queries or none of them"]
  })
  const [text, setText] = useState(false)
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
      setExplain: setExplain,
      explainText: explainText,
      setExplainText: setExplainText,
      text: text,
      setText: setText
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