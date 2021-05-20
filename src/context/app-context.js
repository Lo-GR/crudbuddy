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
  const [explain, setExplain] = useState(["Welcome to CRUDBuddy, my name is Cruddy. I will help you build your CRUD API.", "On this site, you can add an object and project in order to create full CRUD API Controllers and Models in ASP .Net. Go ahead and try it!"])
  const [explainText, setExplainText] = useState({
    newForm: ["You can enter the names of your project, object, and properties here. Don't sweat about capitalization or white space, I'll take care of that!","You can check whether you want query parameters for your properties. At this time, I can only add all the queries or none of them"],
    selectCrud: ["BAM! Here is your full CRUD API. You can swap between Model, Model Context, and Controller.", "Simply press the text and it will highlight automatically. The Context model automatically checks other entries for the same project name and adds those objects as well."],
    backToList: ["That's all there is to it! Feel free to add additional CRUD.", "You can find this source code and the author at https://github.com/Lo-GR/crudbuddy . "],
    editForm: ["Here you can edit your currently selected object.","Be aware, that at the moment, you'll have you reenter your entire information for the object and project. If you'd rather not, simply go back"]
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