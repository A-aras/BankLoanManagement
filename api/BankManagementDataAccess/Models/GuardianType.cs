using System;
using System.Collections.Generic;

#nullable disable

namespace BankManagementDataAccess.Models
{
  public partial class GuardianType : RefDataModelBase
  {
    public GuardianType()
    {
      CustomerDetails = new HashSet<CustomerDetail>();
    }

    public virtual ICollection<CustomerDetail> CustomerDetails { get; set; }
  }
}
