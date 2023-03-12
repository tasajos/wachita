using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
//using static System.Runtime.InteropServices.JavaScript.JSType;
using System.Text.Json;
using System.Text.Json.Nodes;
//using Newtonsoft.Json;
using wachitaBE.Models;

namespace wachitaBE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WachitaController : ControllerBase


    {
        private readonly ContextDBWachcs _context;
        private object jsonObject;

        public WachitaController(ContextDBWachcs context) {

            _context = context;


        }


        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listwachita = await _context.Wachitaregistro.ToListAsync();
                return Ok(listwachita);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);


            }


        }

        [HttpPost]

        public async Task<IActionResult> Post(Clwachita clwachita)
        {

            try
            {
                
                clwachita.FechaCreacion = DateTime.Now;
                _context.Add(clwachita);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Get", new { Id = clwachita.id }, clwachita);

               // return CreatedAtAction("Get", new { Id = clwachita.id }, clwachita);
            }
            catch (System.Text.Json.JsonException ex)
            {
                // Handle JSON serialization or deserialization errors
                return BadRequest("Invalid JSON data: " + ex.Message);
            }
            catch (Exception ex)
            {
                // Handle other errors
                return BadRequest(ex.Message);
            }

        }

        [HttpGet("{id}")]

        public async Task<IActionResult> Get(int Id)
        {
            try
            {
                var getdelete = await _context.Wachitaregistro.FindAsync(Id);
                return Ok(getdelete);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int Id)
        {
            try
            {
                var delete = await _context.Wachitaregistro.FindAsync(Id);

                if (delete == null)
                {
                    return NotFound();
                }

                _context.Wachitaregistro.Remove(delete);
                await _context.SaveChangesAsync();

                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet("count")]
        public async Task<IActionResult> GetCount()
        {
            var count = await _context.Wachitaregistro.CountAsync();
            return Ok(count);
        }

    }
}
