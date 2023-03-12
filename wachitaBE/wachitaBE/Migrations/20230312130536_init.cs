using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace wachitaBE.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Wachitaregistro",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nombre = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    raza = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    padres = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ubicacion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    dueno = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    edada = table.Column<int>(type: "int", nullable: false),
                    edadm = table.Column<int>(type: "int", nullable: false),
                    marca = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    observacion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    color = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    peso = table.Column<float>(type: "real", nullable: false),
                    origen = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FechaCreacion = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Wachitaregistro", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Wachitaregistro");
        }
    }
}
