const returnSource = (projName, objName) => {
  const projNameSpace = projName + ".Controllers";
  const projContext = projName + "Context";
  const objController = objName + "sController";
  
  return `
  namespace ${projNameSpace}
  {
    [ApiController]
    public class ${objController} : ControllerBase
    {
      private readonly ${projContext} _db;
      public ${objController}(${projContext} db)
      {
        _db = db;
      }
      [HttpGet]
      public async Task<ActionResult<IEnumerable<${objName}>>> Get()
      {
        var query = _db.${objName}s.AsQueryable();
        return await query.ToListAsync();
      }
    }
  }
  `
}

export default returnSource