using System;
using System.Collections.Generic;

#nullable disable

namespace BankManagementDataAccess.Models
{
    public partial class LoanType: RefDataModelBase
  {
        public LoanType()
        {
            CustomerLoanDetails = new HashSet<CustomerLoanDetail>();
        }

               public virtual ICollection<CustomerLoanDetail> CustomerLoanDetails { get; set; }
    }
}
