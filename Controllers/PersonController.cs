using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using SpecialTestSite.Data;
using SpecialTestSite.Models;

namespace SpecialTestSite.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class PersonController : ControllerBase
    {

        private readonly ILogger<PersonController> _logger;
        private readonly ApplicationDbContext _context;

        public PersonController(ILogger<PersonController> logger, ApplicationDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Person>>> Get()
        {
            // Define a LINQ query
            var personQuery = from p in _context.Persons select p;
            
            return await personQuery.ToListAsync();
        }

        // [HttpGet]
        // public IEnumerable<Person> Get()
        // {
        //     return new IEnumerable<Person>();
        //     // var rng = new Random();
        //     // return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        //     // {
        //     //     Date = DateTime.Now.AddDays(index),
        //     //     TemperatureC = rng.Next(-20, 55),
        //     //     Summary = Summaries[rng.Next(Summaries.Length)]
        //     // })
        //     // .ToArray();
        // }
    }
}
