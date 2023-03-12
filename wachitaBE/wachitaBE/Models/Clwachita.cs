namespace wachitaBE.Models
{
    public class Clwachita
    {
        public int id { get; set; }
        public string nombre { get; set; }
        public string raza { get; set; }
        public string padres { get; set; }

        public string ubicacion { get; set; }
        public string dueno { get; set; }
        public int edada { get; set; }

        public int edadm { get; set; }
        public string marca { get; set; }
        public string observacion { get; set; }
        public string color { get; set; }

        public int peso { get; set; }

        public string origen { get; set; }
        public DateTime FechaCreacion { get; set; }
    }
}
