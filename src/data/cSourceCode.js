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
[HttpPost]
public async Task<ActionResult<${objName}>> Post(${objName} entry)
{
  _db.${objName}s.Add(entry);
  await _db.SaveChangesAsync();
  return CreatedAtAction(nameof(Get${objName}), new {id = entry.${objName}Id}, entry);
}
[HttpGet("{id}")]
public async Task<ActionResult<${objName}>> Get${objName}(int id)
{
  ${objName} entry = await _db.${objName}s.FindAsync(id);
  if (entry == null)
  {
    return NotFound();
  }
  return entry;
}
  `
}

export default returnSource