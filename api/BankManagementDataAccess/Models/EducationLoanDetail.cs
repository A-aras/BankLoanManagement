using System;
using System.Collections.Generic;

#nullable disable

namespace BankManagementDataAccess.Models
{
    public partial class EducationLoanDetail
  {
        public int Id { get; set; }
        public int LoanId { get; set; }
        public string CourseFee { get; set; }
        public string Course { get; set; }
        public string FatherName { get; set; }
        public string FatherOccupation { get; set; }
        public string FatherExp { get; set; }
        public string FatherExpWithCompany { get; set; }
        public string RationCardNo { get; set; }
        public string AnnualIncome { get; set; }

        public virtual CustomerLoanDetail Loan { get; set; }
    }
}
