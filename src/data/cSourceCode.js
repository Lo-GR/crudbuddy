export const returnController = (projName, objName, properties, queries) => {
  const projNameSpace = projName + ".Controllers";
  const projContext = projName + "Context";
  const objController = objName + "sController";
  let queryProperties = ``;
  let argumentProperties = ``;
  if(queries){
    for (let i = 0; i < properties.length; i++){
      if(properties[i] !== "-1"){
        queryProperties = queryProperties + `
        if (${properties[i].toLowerCase()} != null)
        {
          query = query.Where(entry => entry.${properties[i]}.Contains(${properties[i].toLowerCase()}));
        }`
        argumentProperties = argumentProperties + `string ${properties[i].toLowerCase()}`
      }
      if(properties[i +1] !== "-1" && properties[i+1] !== undefined){
        argumentProperties = argumentProperties + `, `;
      }
    }
  }
  return `
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NationalParksAPI.Models;

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
    public async Task<ActionResult<IEnumerable<${objName}>>> Get(${argumentProperties})
    {
      var query = _db.${objName}s.AsQueryable();
      ${queryProperties}
      return await query.ToListAsync();
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
  }
}
`
}

export const returnModel = (projName, objName, properties) =>{
  const projNameSpace = projName + ".Models";
  let parseProperties = ``;
  for (let i = 0; i < properties.length; i++){
    if(properties[i] !== "-1"){
      parseProperties = parseProperties + `
    public string ${properties[i]} {get; set;}`
    }
  }
  return `
using System.ComponentModel.DataAnnotations;

namespace ${projNameSpace}
{
  public class ${objName}
  {
    public ${objName}()
    {

    }
    public int ${objName}Id {get; set;}
    [Required]
    ${parseProperties}
  }
}
`
}

export const returnContext = (projName, objects) => {
  const projContext = projName + "Context";
  const parseObjects = ``;
  for (let i = 0; i< objects.length; i++){
    parseObjects = parseObjects + `
    public DbSet<${objects[i]}> ${objects[i]}s {get; set;}`
  }
  return `
using Microsoft.EntityFrameworkCore;

namespace ${projName}.Models
{
  public class ${projContext} : DbContext
  {
  public ${projContext}(DbContextOptions<${projContext}> options)
        : base(options)
    {
    }
    ${parseObjects}
  }
}`
}