export const returnController = (projName, objName) => {
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
[HttpPut("{id}")]
public async Task<ActionResult> Put(int id, ${objName} entry)
{
  if (id != entry.${objName}Id)
  {
    return NotFound();
  }

  _db.Entry(entry).State = EntityState.Modified;

  try
  {
    await _db.SaveChangesAsync();
  }
  catch (DbUpdateConcurrencyException)
  {
    if (!${objName}Exists(id))
    {
      return NotFound();
    }
    else
    {
      throw;
    }
  }
  return NoContent();
}
private bool ${objName}Exists(int id)
{
  return _db.${objName}s.Any(entry => entry.${objName}Id == id);
}
[HttpDelete("{id}")]
  public async Task<ActionResult> Delete${objName}(int id)
  {
    ${objName} entry = await _db.${objName}s.FindAsync(id);
    if (entry == null)
    {
      return NotFound();
    }
    _db.${objName}s.Remove(entry);
    await _db.SaveChangesAsync();
    return NoContent();
  }
  `
}