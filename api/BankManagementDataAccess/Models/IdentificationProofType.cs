using System;
using System.Collections.Generic;

#nullable disable

namespace BankManagementDataAccess.Models
{
  public partial class IdentificationProofType : RefDataModelBase
  {
    public IdentificationProofType()
    {
      CustomerDetails = new HashSet<CustomerDetail>();
    }

    public virtual ICollection<CustomerDetail> CustomerDetails { get; set; }
  }
}
