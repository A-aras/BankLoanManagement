using Microsoft.EntityFrameworkCore.Migrations;

namespace BankManagementDataAccess.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AccountTypes",
                columns: table => new
                {
                    AccountTypeId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AccountTypeName = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AccountTypes", x => x.AccountTypeId);
                });

            migrationBuilder.CreateTable(
                name: "GenderTypes",
                columns: table => new
                {
                    GenderTypeId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Gender = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GenderTypes", x => x.GenderTypeId);
                });

            migrationBuilder.CreateTable(
                name: "GuardianTypes",
                columns: table => new
                {
                    GuardianTypeId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    GuardianTypeName = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GuardianTypes", x => x.GuardianTypeId);
                });

            migrationBuilder.CreateTable(
                name: "IdentificationProofTypes",
                columns: table => new
                {
                    IdProofTypeId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdProofType = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IdentificationProofTypes", x => x.IdProofTypeId);
                });

            migrationBuilder.CreateTable(
                name: "LoanTypes",
                columns: table => new
                {
                    LoanTypeId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LoanTypeType = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LoanTypes", x => x.LoanTypeId);
                });

            migrationBuilder.CreateTable(
                name: "MaritalStatusTypes",
                columns: table => new
                {
                    MaritalStatusId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MaritalStatus = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MaritalStatus", x => x.MaritalStatusId);
                });

            migrationBuilder.CreateTable(
                name: "CustomerDetail",
                columns: table => new
                {
                    CustomerId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CustomerUID = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    Name = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    UserName = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    Password = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    GuardianTypeId = table.Column<int>(type: "int", nullable: true),
                    GuardianName = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: true),
                    Address = table.Column<string>(type: "varchar(250)", unicode: false, maxLength: 250, nullable: true),
                    Citizenship = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    Country = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    State = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    Email = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    GenderTypeId = table.Column<int>(type: "int", nullable: true),
                    MaritalStatusId = table.Column<int>(type: "int", nullable: true),
                    ContactNo = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    DOB = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    RegistrationDate = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    AccountTypeId = table.Column<int>(type: "int", nullable: true),
                    BranchName = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    CitizenStatus = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    InitialDepositAmount = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    IdProofTypeId = table.Column<int>(type: "int", nullable: true),
                    IdentificationDocNo = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    ReferenceAccountHolderName = table.Column<string>(type: "varchar(150)", unicode: false, maxLength: 150, nullable: true),
                    ReferenceAccountHolderAccountNo = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    ReferenceAccountHolderAddress = table.Column<string>(type: "varchar(250)", unicode: false, maxLength: 250, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CustomerDetail", x => x.CustomerId);
                    table.ForeignKey(
                        name: "FK_CustomerDetail_AccountTypes",
                        column: x => x.AccountTypeId,
                        principalTable: "AccountTypes",
                        principalColumn: "AccountTypeId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_CustomerDetail_GenderTypes",
                        column: x => x.GenderTypeId,
                        principalTable: "GenderTypes",
                        principalColumn: "GenderTypeId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_CustomerDetail_GuardianTypes",
                        column: x => x.GuardianTypeId,
                        principalTable: "GuardianTypes",
                        principalColumn: "GuardianTypeId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_CustomerDetail_IdentificationProofTypes",
                        column: x => x.IdProofTypeId,
                        principalTable: "IdentificationProofTypes",
                        principalColumn: "IdProofTypeId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_CustomerDetail_MaritalStatusTypes",
                        column: x => x.MaritalStatusId,
                        principalTable: "MaritalStatusTypes",
                        principalColumn: "MaritalStatusId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "CustomerLoanDetail",
                columns: table => new
                {
                    LoanId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CustomerId = table.Column<int>(type: "int", nullable: false),
                    LoanTypeId = table.Column<int>(type: "int", nullable: false),
                    LoanAmount = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    LoanApplyDate = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    LoanIssueDate = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    RateOfInterest = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    DurationOfLoan = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CustomerLoanDetail", x => x.LoanId);
                    table.ForeignKey(
                        name: "FK_CustomerLoanDetail_CustomerDetail",
                        column: x => x.CustomerId,
                        principalTable: "CustomerDetail",
                        principalColumn: "CustomerId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_CustomerLoanDetail_LoanTypes",
                        column: x => x.LoanTypeId,
                        principalTable: "LoanTypes",
                        principalColumn: "LoanTypeId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "EducationLoanDetail",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LoanId = table.Column<int>(type: "int", nullable: false),
                    CourseFee = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    Course = table.Column<string>(type: "varchar(150)", unicode: false, maxLength: 150, nullable: true),
                    FatherName = table.Column<string>(type: "varchar(150)", unicode: false, maxLength: 150, nullable: true),
                    FatherOccupation = table.Column<string>(type: "varchar(150)", unicode: false, maxLength: 150, nullable: true),
                    FatherExp = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    FatherExpWithCompany = table.Column<string>(type: "varchar(150)", unicode: false, maxLength: 150, nullable: true),
                    RationCardNo = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    AnnualIncome = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EducationLoanDetail", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EducationLoanDetail_CustomerLoanDetail",
                        column: x => x.LoanId,
                        principalTable: "CustomerLoanDetail",
                        principalColumn: "LoanId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "PersonalLoanDetail",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LoanId = table.Column<int>(type: "int", nullable: false),
                    CompanyName = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    Designation = table.Column<string>(type: "varchar(150)", unicode: false, maxLength: 150, nullable: true),
                    TotalExp = table.Column<string>(type: "varchar(150)", unicode: false, maxLength: 150, nullable: true),
                    ExpWithCompany = table.Column<string>(type: "varchar(150)", unicode: false, maxLength: 150, nullable: true),
                    AnnualIncome = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PersonalLoanDetail", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PersonalLoanDetail_CustomerLoanDetail",
                        column: x => x.LoanId,
                        principalTable: "CustomerLoanDetail",
                        principalColumn: "LoanId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CustomerDetail_AccountTypeId",
                table: "CustomerDetail",
                column: "AccountTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_CustomerDetail_GenderTypeId",
                table: "CustomerDetail",
                column: "GenderTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_CustomerDetail_GuardianTypeId",
                table: "CustomerDetail",
                column: "GuardianTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_CustomerDetail_IdProofTypeId",
                table: "CustomerDetail",
                column: "IdProofTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_CustomerDetail_MaritalStatusId",
                table: "CustomerDetail",
                column: "MaritalStatusId");

            migrationBuilder.CreateIndex(
                name: "IX_CustomerLoanDetail_CustomerId",
                table: "CustomerLoanDetail",
                column: "CustomerId");

            migrationBuilder.CreateIndex(
                name: "IX_CustomerLoanDetail_LoanTypeId",
                table: "CustomerLoanDetail",
                column: "LoanTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_EducationLoanDetail_LoanId",
                table: "EducationLoanDetail",
                column: "LoanId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_PersonalLoanDetail_LoanId",
                table: "PersonalLoanDetail",
                column: "LoanId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EducationLoanDetail");

            migrationBuilder.DropTable(
                name: "PersonalLoanDetail");

            migrationBuilder.DropTable(
                name: "CustomerLoanDetail");

            migrationBuilder.DropTable(
                name: "CustomerDetail");

            migrationBuilder.DropTable(
                name: "LoanTypes");

            migrationBuilder.DropTable(
                name: "AccountTypes");

            migrationBuilder.DropTable(
                name: "GenderTypes");

            migrationBuilder.DropTable(
                name: "GuardianTypes");

            migrationBuilder.DropTable(
                name: "IdentificationProofTypes");

            migrationBuilder.DropTable(
                name: "MaritalStatusTypes");
        }
    }
}
