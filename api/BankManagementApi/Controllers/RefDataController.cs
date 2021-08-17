using BankManagementDataAccess.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BankManagementApi.Controllers
{
    [Route("bms/refdata")]
    [ApiController]
    public class RefDataController : ControllerBase
    {
        private readonly bankmanagementContext _context;

        public RefDataController(bankmanagementContext context)
        {
            _context = context;
        }

        // GET: api/<RefDataController>
        [HttpGet]
        [Route("loanTypes")]
        public async Task<IActionResult> GetLoanTypes()
        {
            var loanTypes = _context.LoanTypes;
            return Ok(loanTypes);
        }

        [HttpGet]
        [Route("accountTypes")]
        public async Task<IActionResult> GetAccountTypes()
        {
            var accountTypes = _context.AccountTypes;
            return Ok(accountTypes);
        }

        [HttpGet]
        [Route("genderTypes")]
        public async Task<IActionResult> GetGenderTypes()
        {
            var genderTypes = _context.GenderTypes;
            return Ok(genderTypes);
        }

        [HttpGet]
        [Route("guardianTypes")]
        public async Task<IActionResult> GetGuardianTypes()
        {
            var guardianTypes = _context.GuardianTypes;
            return Ok(guardianTypes);
        }

        [HttpGet]
        [Route("maritalStatuses")]
        public async Task<IActionResult> GetMaritalStatusTypes()
        {
            var maritalStatuses = _context.MaritalStatusTypes;
            return Ok(maritalStatuses);
        }

        [HttpGet]
        [Route("idProofTypes")]
        public async Task<IActionResult> GetIdentificationProofTypes()
        {
            var proofTypes = _context.IdentificationProofTypes;
            return Ok(proofTypes);
        }
    }
}
