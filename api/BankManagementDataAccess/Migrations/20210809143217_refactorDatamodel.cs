using Microsoft.EntityFrameworkCore.Migrations;

namespace BankManagementDataAccess.Migrations
{
    public partial class refactorDatamodel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "MaritalStatus",
                table: "MaritalStatusTypes",
                newName: "Code");

            migrationBuilder.RenameColumn(
                name: "MaritalStatusId",
                table: "MaritalStatusTypes",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "LoanTypeType",
                table: "LoanTypes",
                newName: "Code");

            migrationBuilder.RenameColumn(
                name: "LoanTypeId",
                table: "LoanTypes",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "IdProofType",
                table: "IdentificationProofTypes",
                newName: "Code");

            migrationBuilder.RenameColumn(
                name: "IdProofTypeId",
                table: "IdentificationProofTypes",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "GuardianTypeName",
                table: "GuardianTypes",
                newName: "Code");

            migrationBuilder.RenameColumn(
                name: "GuardianTypeId",
                table: "GuardianTypes",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "Gender",
                table: "GenderTypes",
                newName: "Code");

            migrationBuilder.RenameColumn(
                name: "GenderTypeId",
                table: "GenderTypes",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "AccountTypeName",
                table: "AccountTypes",
                newName: "Code");

            migrationBuilder.RenameColumn(
                name: "AccountTypeId",
                table: "AccountTypes",
                newName: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Code",
                table: "MaritalStatusTypes",
                newName: "MaritalStatus");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "MaritalStatusTypes",
                newName: "MaritalStatusId");

            migrationBuilder.RenameColumn(
                name: "Code",
                table: "LoanTypes",
                newName: "LoanTypeType");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "LoanTypes",
                newName: "LoanTypeId");

            migrationBuilder.RenameColumn(
                name: "Code",
                table: "IdentificationProofTypes",
                newName: "IdProofType");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "IdentificationProofTypes",
                newName: "IdProofTypeId");

            migrationBuilder.RenameColumn(
                name: "Code",
                table: "GuardianTypes",
                newName: "GuardianTypeName");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "GuardianTypes",
                newName: "GuardianTypeId");

            migrationBuilder.RenameColumn(
                name: "Code",
                table: "GenderTypes",
                newName: "Gender");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "GenderTypes",
                newName: "GenderTypeId");

            migrationBuilder.RenameColumn(
                name: "Code",
                table: "AccountTypes",
                newName: "AccountTypeName");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "AccountTypes",
                newName: "AccountTypeId");
        }
    }
}
