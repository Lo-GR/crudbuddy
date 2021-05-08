export default returnSource = (objName) => {

  return
  `
  namespace NationalParksAPI.Controllers
{
  [ApiController]
  public class StatesController : ControllerBase
  {
    private readonly NationalParksAPIContext _db;
    public StatesController(NationalParksAPIContext db)
    {
      _db = db;
    }
    [HttpGet]
    public async Task<ActionResult<IEnumerable<State>>> Get(string name, string region)
    {
      var query = _db.States.Include(entry => entry.Parks).AsQueryable();
      if (name != null)
      {
        query = query.Where(entry => entry.Name.Contains(name));
      }
      if (region != null)
      {
        query = query.Where(entry => entry.Region.Contains(region));
      }
      return await query.ToListAsync();
    }
  }
}
  `
}