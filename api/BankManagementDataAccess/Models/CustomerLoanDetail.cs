using System;
using System.Collections.Generic;

#nullable disable

namespace BankManagementDataAccess.Models
{
    public partial class CustomerLoanDetail
    {
        public CustomerLoanDetail()
        {
        }

        public int LoanId { get; set; }
        public int CustomerId { get; set; }
        public int LoanTypeId { get; set; }
        public string LoanAmount { get; set; }
        public string LoanApplyDate { get; set; }
        public string LoanIssueDate { get; set; }
        public string RateOfInterest { get; set; }
        public string DurationOfLoan { get; set; }

        public virtual CustomerDetail Customer { get; set; }
        public virtual LoanType LoanType { get; set; }
        public virtual EducationLoanDetail EducationLoanDetails { get; set; }
        public virtual PersonalLoanDetail PersonalLoanDetails { get; set; }
    }
}
