using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace BankManagementDataAccess.Models
{
    public partial class bankmanagementContext : DbContext
    {
        public bankmanagementContext()
        {
        }

        public bankmanagementContext(DbContextOptions<bankmanagementContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AccountType> AccountTypes { get; set; }
        public virtual DbSet<CustomerDetail> CustomerDetails { get; set; }
        public virtual DbSet<CustomerLoanDetail> CustomerLoanDetails { get; set; }
        public virtual DbSet<EducationLoanDetail> EducationLoanDetails { get; set; }
        public virtual DbSet<GenderType> GenderTypes { get; set; }
        public virtual DbSet<GuardianType> GuardianTypes { get; set; }
        public virtual DbSet<IdentificationProofType> IdentificationProofTypes { get; set; }
        public virtual DbSet<LoanType> LoanTypes { get; set; }
        public virtual DbSet<MaritalStatusType> MaritalStatusTypes { get; set; }
        public virtual DbSet<PersonalLoanDetail> PersonalLoanDetails { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=ANBU-VM4-1;Database=bankmanagement;User Id=sa; Password=pass@word1;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<AccountType>(entity =>
            {
                entity.Property(e => e.Code)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<CustomerDetail>(entity =>
            {
                entity.HasKey(e => e.CustomerId);

                entity.ToTable("CustomerDetail");

                entity.Property(e => e.Address)
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.BranchName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CitizenStatus)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Citizenship)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ContactNo)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Country)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CustomerUid)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("CustomerUID");

                entity.Property(e => e.Dob)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("DOB");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.GuardianName)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.IdentificationDocNo)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.InitialDepositAmount)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ReferenceAccountHolderAccountNo)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ReferenceAccountHolderAddress)
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.ReferenceAccountHolderName)
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.RegistrationDate)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.State)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UserName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.AccountType)
                    .WithMany(p => p.CustomerDetails)
                    .HasForeignKey(d => d.AccountTypeId)
                    .HasConstraintName("FK_CustomerDetail_AccountTypes");

                entity.HasOne(d => d.GenderType)
                    .WithMany(p => p.CustomerDetails)
                    .HasForeignKey(d => d.GenderTypeId)
                    .HasConstraintName("FK_CustomerDetail_GenderTypes");

                entity.HasOne(d => d.GuardianType)
                    .WithMany(p => p.CustomerDetails)
                    .HasForeignKey(d => d.GuardianTypeId)
                    .HasConstraintName("FK_CustomerDetail_GuardianTypes");

                entity.HasOne(d => d.IdProofType)
                    .WithMany(p => p.CustomerDetails)
                    .HasForeignKey(d => d.IdProofTypeId)
                    .HasConstraintName("FK_CustomerDetail_IdentificationProofTypes");

                entity.HasOne(d => d.MaritalStatus)
                    .WithMany(p => p.CustomerDetails)
                    .HasForeignKey(d => d.MaritalStatusId)
                    .HasConstraintName("FK_CustomerDetail_MaritalStatusTypes");
            });

            modelBuilder.Entity<CustomerLoanDetail>(entity =>
            {
                entity.HasKey(e => e.LoanId);

                entity.ToTable("CustomerLoanDetail");

                entity.Property(e => e.DurationOfLoan)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LoanAmount)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LoanApplyDate)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LoanIssueDate)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.RateOfInterest)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.CustomerLoanDetails)
                    .HasForeignKey(d => d.CustomerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CustomerLoanDetail_CustomerDetail");

                entity.HasOne(d => d.LoanType)
                    .WithMany(p => p.CustomerLoanDetails)
                    .HasForeignKey(d => d.LoanTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CustomerLoanDetail_LoanTypes");
            });

            modelBuilder.Entity<EducationLoanDetail>(entity =>
            {
                entity.ToTable("EducationLoanDetail");

                entity.Property(e => e.AnnualIncome)
                    .HasMaxLength(50)
                    .IsUnicode(false);

              entity.Property(e => e.Course)
                    .HasMaxLength(150)
                    .IsUnicode(false);

              entity.Property(e => e.CourseFee)
                  .HasMaxLength(50)
                  .IsUnicode(false);

              entity.Property(e => e.FatherExp)
                  .HasMaxLength(50)
                  .IsUnicode(false);

              entity.Property(e => e.FatherExpWithCompany)
                  .HasMaxLength(150)
                  .IsUnicode(false);

              entity.Property(e => e.FatherName)
                  .HasMaxLength(150)
                  .IsUnicode(false);

              entity.Property(e => e.FatherOccupation)
                  .HasMaxLength(150)
                  .IsUnicode(false);

              entity.Property(e => e.RationCardNo)
                  .HasMaxLength(50)
                  .IsUnicode(false);

              

                entity.HasOne(d => d.Loan)
                    .WithOne(p => p.EducationLoanDetails)
                    //.HasForeignKey(d => d.LoanId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_EducationLoanDetail_CustomerLoanDetail");
            });

            modelBuilder.Entity<GenderType>(entity =>
            {
              entity.Property(e => e.Code)
                   .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<GuardianType>(entity =>
            {
              entity.Property(e => e.Code)
                   .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<IdentificationProofType>(entity =>
            {
                entity.HasKey(e => e.Id);

              entity.Property(e => e.Code)
                      .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<LoanType>(entity =>
            {
              entity.Property(e => e.Code)
                  .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<MaritalStatusType>(entity =>
            {
                entity.HasKey(e => e.Id)
                    .HasName("PK_MaritalStatus");

              entity.Property(e => e.Code)
                   .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<PersonalLoanDetail>(entity =>
            {
                entity.ToTable("PersonalLoanDetail");

                entity.Property(e => e.AnnualIncome)
                    .HasMaxLength(50)
                    .IsUnicode(false);

              entity.Property(e => e.CompanyName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

              entity.Property(e => e.Designation)
                  .HasMaxLength(150)
                  .IsUnicode(false);

              entity.Property(e => e.ExpWithCompany)
                  .HasMaxLength(150)
                  .IsUnicode(false);

              entity.Property(e => e.TotalExp)
                  .HasMaxLength(150)
                  .IsUnicode(false);

              entity.HasOne(d => d.Loan)
                    .WithOne(p => p.PersonalLoanDetails)
                    //.HasForeignKey(d => d.LoanId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PersonalLoanDetail_CustomerLoanDetail");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
