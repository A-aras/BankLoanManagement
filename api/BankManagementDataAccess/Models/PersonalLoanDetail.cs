using System;
using System.Collections.Generic;

#nullable disable

namespace BankManagementDataAccess.Models
{
    public partial class PersonalLoanDetail
  {
        public int Id { get; set; }
        public int LoanId { get; set; }
        public string CompanyName { get; set; }
        public string Designation { get; set; }
        public string TotalExp { get; set; }
        public string ExpWithCompany { get; set; }
        public string AnnualIncome { get; set; }

        public virtual CustomerLoanDetail Loan { get; set; }
    }
}
