using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using JavaScript.Models;
using Newtonsoft.Json;

namespace JavaScript.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult GetData()
        {
            return Json(Client.GetClients());
        }

        [HttpPost]
        public IActionResult PostData([FromBody]Catigorie catigorie)
        {
            return Ok($"Is Ok, transfered, ID:{catigorie.ID} Name:{catigorie.Name}");
        }
    }
}
