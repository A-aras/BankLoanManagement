using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BankManagementDataAccess.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BankManagementApi.Controllers
{
    [Route("bms/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        // GET: api/<AuthController>
        private readonly bankmanagementContext _context;

        public AuthController(bankmanagementContext context)
        {
            _context = context;
        }

        // GET: CustomerDetails/Details/5
        [HttpGet]
        public async Task<IActionResult> Details(string userName, string password)
        {
            if (userName == null || password == null)
            {
                return NotFound();
            }

            var customerDetail = await _context.CustomerDetails
                .FirstOrDefaultAsync(m => m.UserName == userName && m.Password == password);
            if (customerDetail == null)
            {
                return NotFound();
            }

            return Ok(customerDetail.CustomerId);
        }
    }
}