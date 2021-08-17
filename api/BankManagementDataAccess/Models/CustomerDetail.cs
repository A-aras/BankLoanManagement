using Newtonsoft.Json;
using System;
using System.Collections.Generic;

#nullable disable

namespace BankManagementDataAccess.Models
{
    public partial class CustomerDetail
    {
        public CustomerDetail()
        {
        }

        [JsonIgnore]
        public int CustomerId { get; set; }
        public string CustomerUid { get; set; }
        public string Name { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public int? GuardianTypeId { get; set; }
        public string GuardianName { get; set; }
        public string Address { get; set; }
        public string Citizenship { get; set; }
        public string Country { get; set; }
        public string State { get; set; }
        public string Email { get; set; }
        public int? GenderTypeId { get; set; }
        public int? MaritalStatusId { get; set; }
        public string ContactNo { get; set; }
        public string Dob { get; set; }
        public string RegistrationDate { get; set; }
        public int? AccountTypeId { get; set; }
        public string BranchName { get; set; }
        public string CitizenStatus { get; set; }
        public string InitialDepositAmount { get; set; }
        public int? IdProofTypeId { get; set; }
        public string IdentificationDocNo { get; set; }
        public string ReferenceAccountHolderName { get; set; }
        public string ReferenceAccountHolderAccountNo { get; set; }
        public string ReferenceAccountHolderAddress { get; set; }

        [JsonIgnore]
        public virtual AccountType AccountType { get; set; }
        [JsonIgnore]
        public virtual GenderType GenderType { get; set; }
        [JsonIgnore]
        public virtual GuardianType GuardianType { get; set; }
        [JsonIgnore]
        public virtual IdentificationProofType IdProofType { get; set; }
        [JsonIgnore]
        public virtual MaritalStatusType MaritalStatus { get; set; }
        [JsonIgnore]
        public virtual ICollection<CustomerLoanDetail> CustomerLoanDetails { get; set; }
    }
}
