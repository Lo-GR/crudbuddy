import * as c from "./ActionTypes";

export const addCRUD = crudInfo => {
  const {id, projName, objName} = crudInfo;
  return {
    type: c.ADD_CRUD,
    id: id,
    projName: projName,
    objName: objName
  }
}