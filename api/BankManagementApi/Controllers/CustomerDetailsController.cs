using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BankManagementDataAccess.Models;
using Newtonsoft.Json;

namespace BankManagementApi.Controllers
{
    [ApiController]
    [Route("bms/customer")]
    public class CustomerDetailsController : ControllerBase
    {
        private readonly bankmanagementContext _context;

        public CustomerDetailsController(bankmanagementContext context)
        {
            _context = context;
        }

        // GET: CustomerDetails/Details/5
        [HttpGet]
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var customerDetail = await _context.CustomerDetails
                .FirstOrDefaultAsync(m => m.CustomerId == id);
            if (customerDetail == null)
            {
                return NotFound();
            }

            var jsonResult = JsonConvert.SerializeObject(
                    customerDetail,
                    Formatting.None,
                    new JsonSerializerSettings()
                    {
                        ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                    });

            return Ok(jsonResult);
        }

        // POST: CustomerDetails/Create
        //[Bind("Id,Name,UserName,Password,GuardianType,GurardianName,Address,Citizenship,Country,State,Email,Gender,MaritalStatus,ContactNo,Dob,RegistrationDate,AccountType,BranchName,CitizenStatus,InitialDepositAmount,IdProofType,IdentificationDocNo,ReferenceAccountHolderName,ReferenceAccountHolderAccountNo,ReferenceAccountHolderAddress")] 
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        //[ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([FromBody]CustomerDetail customerDetail)
        {
            if (ModelState.IsValid)
            {
                _context.Add(customerDetail);
                await _context.SaveChangesAsync();
                return Ok();
            }
            return BadRequest(customerDetail);
        }

        // POST: CustomerDetails/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPut]
        public async Task<IActionResult> Edit(int id, [FromBody]CustomerDetail customerDetail)
        {
            if (id == null || customerDetail.CustomerUid == null)
            {
                return NotFound();
            }

            var detail = _context.CustomerDetails.AsNoTracking()
               .FirstOrDefault(m => m.CustomerId == id);
            if (detail == null || detail.CustomerUid != customerDetail.CustomerUid)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    customerDetail.CustomerId = id;
                    _context.Update(customerDetail);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!CustomerDetailExists(customerDetail.CustomerId))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }

                return Ok(customerDetail);
            }

            return BadRequest(customerDetail);
        }

        // POST: CustomerDetails/Delete/5
        [HttpDelete, ActionName("Delete")]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var customerDetail = await _context.CustomerDetails.FindAsync(id);
            _context.CustomerDetails.Remove(customerDetail);
            await _context.SaveChangesAsync();
            return Ok();
        }

        private bool CustomerDetailExists(int id)
        {
            return _context.CustomerDetails.Any(e => e.CustomerId == id);
        }
    }
}
