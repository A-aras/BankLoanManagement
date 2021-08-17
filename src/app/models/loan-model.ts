import { LoanTenure, LoanType } from './enums';

// export interface LoanModel {
//     loanId : number,
//     loanType: string,
//     loanAmount: number
// }


export class LoanDetails {
    loanId: string;
    customerId: string;
    loanTypeId: LoanType | null;
    loanAmount: string;
    loanApplyDate: Date;
    loanIssueDate: Date;
    rateOfInterest: string;
    durationOfLoan: LoanTenure | null;
    homeLoan: PersonalLoan;
    educationLoanDetails: EducationLoan;

    InitializeWithDefaultValue() {

        this.loanId = "";
        this.customerId = "1";
        this.loanTypeId = LoanType.Home;
        this.loanAmount = "20000";
        this.loanApplyDate = new Date();
        this.loanIssueDate = new Date();
        this.rateOfInterest = "9.5";
        this.durationOfLoan = LoanTenure.FiveYears
        this.homeLoan = new PersonalLoan();
        this.homeLoan.InitializeWithDefaultValue();
        this.educationLoanDetails = new EducationLoan();
        this.educationLoanDetails.InitializeWithDefaultValue();
    }
}

export class PersonalLoan {
    annualPersonalIncome: string;
    companyName: string;
    designation: string;
    totalExp: string;
    expWithCompany: string;
    InitializeWithDefaultValue() {
        this.annualPersonalIncome = "10000";
        this.companyName = "abcd company";
        this.designation = "ceo";
        this.totalExp = "15";
        this.expWithCompany = "8"
    }
}

export class EducationLoan {
    courseFee: string;
    course: string;
    fatherName: string;
    fatherOccupation: string;
    fatherTotalExp: string;
    fatherTotalCurrentExp: string;
    rationCardNo: string;
    annualIncome: string
    InitializeWithDefaultValue() {
        this.courseFee = "10000";
        this.course = "course1";
        this.fatherOccupation = "Programmer";
        this.fatherTotalExp = "15"
        this.fatherTotalCurrentExp = "8"
        this.rationCardNo = "rationcard";
        this.annualIncome = "50000"
    }
}
