﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using wachitaBE.Models;

#nullable disable

namespace wachitaBE.Migrations
{
    [DbContext(typeof(ContextDBWachcs))]
    [Migration("20230312130536_init")]
    partial class init
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("wachitaBE.Models.Clwachita", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"), 1L, 1);

                    b.Property<DateTime>("FechaCreacion")
                        .HasColumnType("datetime2");

                    b.Property<string>("color")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("dueno")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("edada")
                        .HasColumnType("int");

                    b.Property<int>("edadm")
                        .HasColumnType("int");

                    b.Property<string>("marca")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("nombre")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("observacion")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("origen")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("padres")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<float>("peso")
                        .HasColumnType("real");

                    b.Property<string>("raza")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ubicacion")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("Wachitaregistro");
                });
#pragma warning restore 612, 618
        }
    }
}
