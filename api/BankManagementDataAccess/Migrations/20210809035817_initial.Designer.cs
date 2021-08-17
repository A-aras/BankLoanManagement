﻿// <auto-generated />
using System;
using BankManagementDataAccess.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace BankManagementDataAccess.Migrations
{
    [DbContext(typeof(bankmanagementContext))]
    [Migration("20210809035817_initial")]
    partial class initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.8")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("BankManagementDataAccess.Models.AccountType", b =>
                {
                    b.Property<int>("AccountTypeId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("AccountTypeName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.HasKey("AccountTypeId");

                    b.ToTable("AccountTypes");
                });

            modelBuilder.Entity("BankManagementDataAccess.Models.CustomerDetail", b =>
                {
                    b.Property<int>("CustomerId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("AccountTypeId")
                        .HasColumnType("int");

                    b.Property<string>("Address")
                        .HasMaxLength(250)
                        .IsUnicode(false)
                        .HasColumnType("varchar(250)");

                    b.Property<string>("BranchName")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("CitizenStatus")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("Citizenship")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("ContactNo")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("Country")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("CustomerUid")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("CustomerUID");

                    b.Property<string>("Dob")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)")
                        .HasColumnName("DOB");

                    b.Property<string>("Email")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.Property<int?>("GenderTypeId")
                        .HasColumnType("int");

                    b.Property<string>("GuardianName")
                        .HasMaxLength(100)
                        .IsUnicode(false)
                        .HasColumnType("varchar(100)");

                    b.Property<int?>("GuardianTypeId")
                        .HasColumnType("int");

                    b.Property<int?>("IdProofTypeId")
                        .HasColumnType("int");

                    b.Property<string>("IdentificationDocNo")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("InitialDepositAmount")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.Property<int?>("MaritalStatusId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("Password")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("ReferenceAccountHolderAccountNo")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("ReferenceAccountHolderAddress")
                        .HasMaxLength(250)
                        .IsUnicode(false)
                        .HasColumnType("varchar(250)");

                    b.Property<string>("ReferenceAccountHolderName")
                        .HasMaxLength(150)
                        .IsUnicode(false)
                        .HasColumnType("varchar(150)");

                    b.Property<string>("RegistrationDate")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("State")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("UserName")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.HasKey("CustomerId");

                    b.HasIndex("AccountTypeId");

                    b.HasIndex("GenderTypeId");

                    b.HasIndex("GuardianTypeId");

                    b.HasIndex("IdProofTypeId");

                    b.HasIndex("MaritalStatusId");

                    b.ToTable("CustomerDetail");
                });

            modelBuilder.Entity("BankManagementDataAccess.Models.CustomerLoanDetail", b =>
                {
                    b.Property<int>("LoanId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CustomerId")
                        .HasColumnType("int");

                    b.Property<string>("DurationOfLoan")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("LoanAmount")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("LoanApplyDate")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("LoanIssueDate")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.Property<int>("LoanTypeId")
                        .HasColumnType("int");

                    b.Property<string>("RateOfInterest")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.HasKey("LoanId");

                    b.HasIndex("CustomerId");

                    b.HasIndex("LoanTypeId");

                    b.ToTable("CustomerLoanDetail");
                });

            modelBuilder.Entity("BankManagementDataAccess.Models.EducationLoanDetail", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("AnnualIncome")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("Course")
                        .HasMaxLength(150)
                        .IsUnicode(false)
                        .HasColumnType("varchar(150)");

                    b.Property<string>("CourseFee")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("FatherExp")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("FatherExpWithCompany")
                        .HasMaxLength(150)
                        .IsUnicode(false)
                        .HasColumnType("varchar(150)");

                    b.Property<string>("FatherName")
                        .HasMaxLength(150)
                        .IsUnicode(false)
                        .HasColumnType("varchar(150)");

                    b.Property<string>("FatherOccupation")
                        .HasMaxLength(150)
                        .IsUnicode(false)
                        .HasColumnType("varchar(150)");

                    b.Property<int>("LoanId")
                        .HasColumnType("int");

                    b.Property<string>("RationCardNo")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.HasKey("Id");

                    b.HasIndex("LoanId")
                        .IsUnique();

                    b.ToTable("EducationLoanDetail");
                });

            modelBuilder.Entity("BankManagementDataAccess.Models.GenderType", b =>
                {
                    b.Property<int>("GenderTypeId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Gender")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.HasKey("GenderTypeId");

                    b.ToTable("GenderTypes");
                });

            modelBuilder.Entity("BankManagementDataAccess.Models.GuardianType", b =>
                {
                    b.Property<int>("GuardianTypeId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("GuardianTypeName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.HasKey("GuardianTypeId");

                    b.ToTable("GuardianTypes");
                });

            modelBuilder.Entity("BankManagementDataAccess.Models.IdentificationProofType", b =>
                {
                    b.Property<int>("IdProofTypeId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("IdProofType")
                        .IsRequired()
                        .HasMaxLength(100)
                        .IsUnicode(false)
                        .HasColumnType("varchar(100)");

                    b.HasKey("IdProofTypeId");

                    b.ToTable("IdentificationProofTypes");
                });

            modelBuilder.Entity("BankManagementDataAccess.Models.LoanType", b =>
                {
                    b.Property<int>("LoanTypeId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("LoanTypeType")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.HasKey("LoanTypeId");

                    b.ToTable("LoanTypes");
                });

            modelBuilder.Entity("BankManagementDataAccess.Models.MaritalStatusType", b =>
                {
                    b.Property<int>("MaritalStatusId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("MaritalStatus")
                        .IsRequired()
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.HasKey("MaritalStatusId")
                        .HasName("PK_MaritalStatus");

                    b.ToTable("MaritalStatusTypes");
                });

            modelBuilder.Entity("BankManagementDataAccess.Models.PersonalLoanDetail", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("AnnualIncome")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("CompanyName")
                        .HasMaxLength(50)
                        .IsUnicode(false)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("Designation")
                        .HasMaxLength(150)
                        .IsUnicode(false)
                        .HasColumnType("varchar(150)");

                    b.Property<string>("ExpWithCompany")
                        .HasMaxLength(150)
                        .IsUnicode(false)
                        .HasColumnType("varchar(150)");

                    b.Property<int>("LoanId")
                        .HasColumnType("int");

                    b.Property<string>("TotalExp")
                        .HasMaxLength(150)
                        .IsUnicode(false)
                        .HasColumnType("varchar(150)");

                    b.HasKey("Id");

                    b.HasIndex("LoanId")
                        .IsUnique();

                    b.ToTable("PersonalLoanDetail");
                });

            modelBuilder.Entity("BankManagementDataAccess.Models.CustomerDetail", b =>
                {
                    b.HasOne("BankManagementDataAccess.Models.AccountType", "AccountType")
                        .WithMany("CustomerDetails")
                        .HasForeignKey("AccountTypeId")
                        .HasConstraintName("FK_CustomerDetail_AccountTypes");

                    b.HasOne("BankManagementDataAccess.Models.GenderType", "GenderType")
                        .WithMany("CustomerDetails")
                        .HasForeignKey("GenderTypeId")
                        .HasConstraintName("FK_CustomerDetail_GenderTypes");

                    b.HasOne("BankManagementDataAccess.Models.GuardianType", "GuardianType")
                        .WithMany("CustomerDetails")
                        .HasForeignKey("GuardianTypeId")
                        .HasConstraintName("FK_CustomerDetail_GuardianTypes");

                    b.HasOne("BankManagementDataAccess.Models.IdentificationProofType", "IdProofType")
                        .WithMany("CustomerDetails")
                        .HasForeignKey("IdProofTypeId")
                        .HasConstraintName("FK_CustomerDetail_IdentificationProofTypes");

                    b.HasOne("BankManagementDataAccess.Models.MaritalStatusType", "MaritalStatus")
                        .WithMany("CustomerDetails")
                        .HasForeignKey("MaritalStatusId")
                        .HasConstraintName("FK_CustomerDetail_MaritalStatusTypes");

                    b.Navigation("AccountType");

                    b.Navigation("GenderType");

                    b.Navigation("GuardianType");

                    b.Navigation("IdProofType");

                    b.Navigation("MaritalStatus");
                });

            modelBuilder.Entity("BankManagementDataAccess.Models.CustomerLoanDetail", b =>
                {
                    b.HasOne("BankManagementDataAccess.Models.CustomerDetail", "Customer")
                        .WithMany("CustomerLoanDetails")
                        .HasForeignKey("CustomerId")
                        .HasConstraintName("FK_CustomerLoanDetail_CustomerDetail")
                        .IsRequired();

                    b.HasOne("BankManagementDataAccess.Models.LoanType", "LoanType")
                        .WithMany("CustomerLoanDetails")
                        .HasForeignKey("LoanTypeId")
                        .HasConstraintName("FK_CustomerLoanDetail_LoanTypes")
                        .IsRequired();

                    b.Navigation("Customer");

                    b.Navigation("LoanType");
                });

            modelBuilder.Entity("BankManagementDataAccess.Models.EducationLoanDetail", b =>
                {
                    b.HasOne("BankManagementDataAccess.Models.CustomerLoanDetail", "Loan")
                        .WithOne("EducationLoanDetails")
                        .HasForeignKey("BankManagementDataAccess.Models.EducationLoanDetail", "LoanId")
                        .HasConstraintName("FK_EducationLoanDetail_CustomerLoanDetail")
                        .IsRequired();

                    b.Navigation("Loan");
                });

            modelBuilder.Entity("BankManagementDataAccess.Models.PersonalLoanDetail", b =>
                {
                    b.HasOne("BankManagementDataAccess.Models.CustomerLoanDetail", "Loan")
                        .WithOne("PersonalLoanDetails")
                        .HasForeignKey("BankManagementDataAccess.Models.PersonalLoanDetail", "LoanId")
                        .HasConstraintName("FK_PersonalLoanDetail_CustomerLoanDetail")
                        .IsRequired();

                    b.Navigation("Loan");
                });

            modelBuilder.Entity("BankManagementDataAccess.Models.AccountType", b =>
                {
                    b.Navigation("CustomerDetails");
                });

            modelBuilder.Entity("BankManagementDataAccess.Models.CustomerDetail", b =>
                {
                    b.Navigation("CustomerLoanDetails");
                });

            modelBuilder.Entity("BankManagementDataAccess.Models.CustomerLoanDetail", b =>
                {
                    b.Navigation("EducationLoanDetails");

                    b.Navigation("PersonalLoanDetails");
                });

            modelBuilder.Entity("BankManagementDataAccess.Models.GenderType", b =>
                {
                    b.Navigation("CustomerDetails");
                });

            modelBuilder.Entity("BankManagementDataAccess.Models.GuardianType", b =>
                {
                    b.Navigation("CustomerDetails");
                });

            modelBuilder.Entity("BankManagementDataAccess.Models.IdentificationProofType", b =>
                {
                    b.Navigation("CustomerDetails");
                });

            modelBuilder.Entity("BankManagementDataAccess.Models.LoanType", b =>
                {
                    b.Navigation("CustomerLoanDetails");
                });

            modelBuilder.Entity("BankManagementDataAccess.Models.MaritalStatusType", b =>
                {
                    b.Navigation("CustomerDetails");
                });
#pragma warning restore 612, 618
        }
    }
}
