export default returnSource = (projName, objName) => {

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
      public async Task<ActionResult<IEnumerable<State>>> Get()
      {
        var query = _db.States.AsQueryable();
        return await query.ToListAsync();
      }
    }
  }
  `
}