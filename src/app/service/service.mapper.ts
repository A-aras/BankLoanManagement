import { CustomerModel } from '../models/customer.Model';
import { Citizenship, LoanType } from '../models/enums';
import { LoanDetails } from '../models/loan-model';
import { AutoMapper } from './auto.map';



let customerDtoMapperFields = new Map<string, any>([
    ['customeruid', 'CustomerUid'],
    ['name', 'Name'],
    ['username', 'UserName'],
    ['password', 'Password'],
    ['guardiantypeid', 'GuardianTypeId'],
    ['guardianname', 'GuardianName'],
    ['address', 'Address'],
    ['citizenship', 'Citizenship'],
    ['country', 'Country'],
    ['state', 'State'],
    ['email', 'Email'],
    ['gendertypeid', 'GenderTypeId'],
    ['maritalstatusid', 'MaritalStatusId'],
    ['contactno', 'ContactNo'],
    ['dob', 'Dob'],
    ['registrationdate', 'RegistrationDate'],
    ['accounttypeid', 'AccountTypeId'],
    ['branchname', 'BranchName'],
    ['citizenstatus', 'CitizenStatus'],
    ['initialdepositamount', 'InitialDepositAmount'],
    ['idprooftypeid', 'IdProofTypeId'],
    ['identificationdocno', 'IdentificationDocNo'],
    ['referenceaccountholdername', 'ReferenceAccountHolderName'],
    ['referenceaccountholderaccountno', 'ReferenceAccountHolderAccountNo'],
    ['referenceaccountholderaddress', 'ReferenceAccountHolderAddress'],

]);

let edu_LoanDtoMapperFields = new Map<string, any>([
    ['id', 'Id'],
    ['loanid', 'LoanId'],
    ['coursefee', 'CourseFee'],
    ['course', 'Course'],
    ['fathername', 'FatherName'],
    ['fatheroccupation', 'FatherOccupation'],
    ['fatherexp', 'FatherExp'],
    ['fatherexpwithcompany', 'FatherExpWithCompany'],
    ['rationcardno', 'RationCardNo'],
    ['annualincome', 'AnnualIncome'],

]);


// companyName	string
// nullable: true
// designation	string
// nullable: true
// totalExp	string
// nullable: true
// expWithCompany	string
// nullable: true
// annualIncome	string
// nullable: true

let personalLoanMapperFields = new Map([
    ['loanld', 'LoanId'],
    ['companyname', 'CompanyName'],
    ['designation', 'Designation'],
    ['totalexp', 'TotalExp'],
    ['expwithcompany', 'expWithCompany'],
    ['annualpersonalincome','annualPersonalIncome'],
    //['loanld', 'LoanId'],
]);

let loandMapperFields = new Map<string, any>([
    ['loanld', 'LoanId'],
    ['customerid', 'CustomerId'],
    ['loantypeid', 'LoanTypeId'],
    ['loanamount', 'LoanAmount'],
    ['loanapplydate', 'LoanApplyDate'],
    ['loanissuedate', 'LoanIssueDate'],
    ['rateofinterest', 'RateOfInterest'],
    ['durationofloan', 'DurationOfLoan'],
    ['homeloan', ['PersonalLoanDetails', personalLoanMapperFields]],
    ['educationloandetails',['EducationLoanDetails',edu_LoanDtoMapperFields]]
    //['homeloan', ['homeLoan', edu_LoanDtoMapperFields]],
    //['durationofloan', 'DurationOfLoan'],

]);

// let home_LoanDtoMapperFields = new Map<string, any>([
//     ['id', 'Id'],
//]);



export class ServiceMapper {

    static customerDtoMapperFields = [];

    public static MapCustomerDtoToModel(dto: any): CustomerModel {
        let customer = new CustomerModel();

        customer.InitializeWithDefaultValue();
        var model = AutoMapper.AutoMap(dto, customer, customerDtoMapperFields) as CustomerModel;
        model.citizenship = dto['Citizenship'] == "Resident" ? Citizenship.Resident : Citizenship.Non_Resident;
        //model.dto = dto;
        return model;
    }

    public static MapCustomerModelToDto(model: CustomerModel): any {
        let customer = AutoMapper.AutoMapWithKeyMaps(model, customerDtoMapperFields);

        customer['citizenship'] = model.citizenship == Citizenship.Resident ? "Resident" : "Non_Resident";

        return customer;
    }

    // public static MapLoanDtoToModel(dto: any): LoanDetails {
    //     let loan = new LoanDetails();

    //     loan.InitializeWithDefaultValue();
    //     var model = AutoMapper.AutoMap(dto, customer,loandMapperFields) as CustomerModel;
    //     model.citizenship = dto['Citizenship'] == "Resident" ? Citizenship.Resident : Citizenship.Non_Resident;
    //     model.dto = dto;
    //     return model;
    // }

    public static MapLoanModelToDto(model: LoanDetails): any {
        let loan = AutoMapper.AutoMapWithKeyMaps(model, loandMapperFields);
        // if (model.loanTypeId == LoanType.Home) {
        //     let homeLoan = AutoMapper.AutoMapWithKeyMaps(model, home_LoanDtoMapperFields);
        //     loan.homeloan=homeLoan;
        // }
        //customer['citizenship'] = model.citizenship == Citizenship.Resident ? "Resident" : "Non_Resident";

        return loan;
    }


}