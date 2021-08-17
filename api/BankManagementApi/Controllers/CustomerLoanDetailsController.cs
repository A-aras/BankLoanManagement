using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using BankManagementDataAccess.Models;
using Newtonsoft.Json;

namespace BankManagementApi.Controllers
{
    [ApiController]
    [Route("bms/account")]
    public class CustomerLoanDetailsController : ControllerBase
    {
        private readonly bankmanagementContext _context;

        public CustomerLoanDetailsController(bankmanagementContext context)
        {
            _context = context;
        }

        // GET: CustomerLoanDetails/Details/5
        [HttpGet]
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var customerLoanDetail = await _context.CustomerLoanDetails
                .Include(c => c.Customer)
                .Include(c => c.LoanType)
                .Include(c => c.PersonalLoanDetails)
                .Include(c => c.EducationLoanDetails)
                .FirstOrDefaultAsync(m => m.LoanId == id);
            if (customerLoanDetail == null)
            {
                return NotFound();
            }

            var jsonResult = JsonConvert.SerializeObject(
                    customerLoanDetail,
                    Formatting.None,
                    new JsonSerializerSettings()
                    {
                        ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                    });
            return Ok(jsonResult);
        }

        // POST: CustomerLoanDetails/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        //[Bind("Id,CustomerId,LoanTypeId,LoanAmount,LoanApplyDate,LoanIssueDate,RateOfInterest,DurationOfLoan")]
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        //[ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([FromBody]CustomerLoanDetail customerLoanDetail)
        {
            if (ModelState.IsValid)
            {
                _context.Add(customerLoanDetail);
                await _context.SaveChangesAsync();
                return Ok();
            }

            return BadRequest(customerLoanDetail);
        }

        //POST: CustomerLoanDetails/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPut]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, CustomerLoanDetail customerLoanDetail)
        {
            if (id != customerLoanDetail.LoanId)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(customerLoanDetail);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!CustomerLoanDetailExists(customerLoanDetail.LoanId))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return Ok(customerLoanDetail);
            }

            return BadRequest(customerLoanDetail);
        }

        // POST: CustomerDetails/Delete/5
        [HttpDelete, ActionName("Delete")]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var loanDetail = await _context.CustomerLoanDetails.FindAsync(id);
            _context.CustomerLoanDetails.Remove(loanDetail);
            await _context.SaveChangesAsync();
            return Ok();
        }

        private bool CustomerLoanDetailExists(int id)
        {
            return _context.CustomerLoanDetails.Any(e => e.LoanId == id);
        }
    }
}
