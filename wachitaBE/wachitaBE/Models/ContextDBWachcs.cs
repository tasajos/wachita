using Microsoft.EntityFrameworkCore;

namespace wachitaBE.Models
{
    public class ContextDBWachcs:DbContext
    {

        public ContextDBWachcs(DbContextOptions<ContextDBWachcs> options) : base(options) { 
        
        }

        //el nombre de la clase (clwachita) y la tabla Wachitaregistro
        public DbSet<Clwachita> Wachitaregistro { get; set; }
    }
}
