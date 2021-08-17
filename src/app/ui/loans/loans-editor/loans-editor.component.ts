import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { CustomerModel } from 'src/app/models/customer.Model';
import { AccountType, Citizenship, CitizenshipStatus, Gender, GuradianType, IdentityDocumentType, LoanTenure, LoanType, MaritalStatus } from 'src/app/models/enums';
import { EducationLoan, LoanDetails, PersonalLoan } from 'src/app/models/loan-model';
import { BmsService } from 'src/app/service/bms.service';
import { isMajor, isSenior } from 'src/app/shared/date.utils';
import { AccountDateValidator } from 'src/app/validators/account.date.validators';
import { CustomePatternValidation } from 'src/app/validators/custome.pattern.validator';
import { DefaultValueValidation } from 'src/app/validators/default.value.validator';
import { FormValidator } from 'src/app/validators/form.validator';
import { BindModel } from '../../../shared/extentions/form.control.Extensions';



@Component({
  selector: 'bms-loans-editor',
  templateUrl: './loans-editor.component.html',
  styleUrls: ['./loans-editor.component.scss']
})
export class LoansEditorComponent implements OnInit {
  diposableObject: Subject<void> = new Subject<void>();

  model: LoanDetails;

  loanForm: FormGroup;
  loanTypeControl: FormControl;
  loanAmountControl: FormControl;
  loanAppDateControl: FormControl;
  loanIssueDateControl: FormControl;
  rateOfIntrestContorl: FormControl;
  loanTenureControl: FormControl;


  educationalLoanForm: FormGroup;
  courseFeeControl: FormControl;
  courseControl: FormControl;
  fatherNameContorl: FormControl;
  fatherOccupationControl: FormControl;
  fatherTotalExpControl: FormControl;
  fatherExpInCurrenEmployer: FormControl;
  rationCardControl: FormControl;
  fatherAnnualIncomeControl: FormControl;

  homeLoanForm: FormGroup;
  annualIncomeControl: FormControl;
  companyNameControl: FormControl;
  designationControl: FormControl;
  totalExpControl: FormControl;
  expInCurrenEmployeer: FormControl;

  loanType = LoanType;
  loanTenure = LoanTenure;

  constructor( private service: BmsService) {
    //this.guradianMapping = GuradianTypeMapping;
  }

  ngOnInit(): void {
    this.model = this.getBlankLoanModel();
    this.initializeFormsControl();
    this.AutoCalculation();
  }

  getBlankLoanModel(): LoanDetails {
    let details: LoanDetails = new LoanDetails();
    details.InitializeWithDefaultValue();
    return details;
  }

  initializeFormsControl() {

    this.loanTypeControl = new FormControl();
    BindModel(this.loanTypeControl, this.model, (x: LoanDetails) => x.loanTypeId, this.diposableObject);
    this.loanTypeControl.setValidators([DefaultValueValidation(null, "Select an Loan type")]);

    this.loanAmountControl = new FormControl();
    BindModel(this.loanAmountControl, this.model, (x: LoanDetails) => x.loanAmount, this.diposableObject);
    this.loanAmountControl.setValidators([Validators.required]);

    this.loanAppDateControl = new FormControl();
    BindModel(this.loanAppDateControl, this.model, (x: LoanDetails) => x.loanApplyDate, this.diposableObject);
    this.loanAppDateControl.setValidators([Validators.required]);

    this.loanIssueDateControl = new FormControl();
    BindModel(this.loanIssueDateControl, this.model, (x: LoanDetails) => x.loanIssueDate, this.diposableObject);
    this.loanIssueDateControl.setValidators([Validators.required]);

    this.rateOfIntrestContorl = new FormControl();
    BindModel(this.rateOfIntrestContorl, this.model, (x: LoanDetails) => x.rateOfInterest, this.diposableObject);
    this.rateOfIntrestContorl.setValidators([Validators.required]);

    this.loanTenureControl = new FormControl();
    BindModel(this.loanTenureControl, this.model, (x: LoanDetails) => x.durationOfLoan, this.diposableObject);
    this.loanTenureControl.setValidators([DefaultValueValidation(null, "Select an valid tenure")]);

    this.courseFeeControl = new FormControl();
    BindModel(this.courseFeeControl, this.model.educationLoanDetails, (x: EducationLoan) => x.courseFee, this.diposableObject);
    this.courseFeeControl.setValidators([Validators.required]);

    this.courseControl = new FormControl();
    BindModel(this.courseControl, this.model.educationLoanDetails, (x: EducationLoan) => x.course, this.diposableObject);
    this.courseControl.setValidators([Validators.required]);

    this.fatherNameContorl = new FormControl();
    BindModel(this.fatherNameContorl, this.model.educationLoanDetails, (x: EducationLoan) => x.fatherName, this.diposableObject);
    this.fatherNameContorl.setValidators([Validators.required]);

    this.fatherOccupationControl = new FormControl();
    BindModel(this.fatherOccupationControl, this.model.educationLoanDetails, (x: EducationLoan) => x.fatherOccupation, this.diposableObject);
    this.fatherOccupationControl.setValidators([Validators.required]);

    this.fatherTotalExpControl = new FormControl();
    BindModel(this.fatherTotalExpControl, this.model.educationLoanDetails, (x: EducationLoan) => x.fatherTotalExp, this.diposableObject);
    this.fatherTotalExpControl.setValidators([Validators.required]);

    this.fatherExpInCurrenEmployer = new FormControl();
    BindModel(this.fatherExpInCurrenEmployer, this.model.educationLoanDetails, (x: EducationLoan) => x.fatherTotalCurrentExp, this.diposableObject);
    this.fatherExpInCurrenEmployer.setValidators([Validators.required]);

    this.rationCardControl = new FormControl();
    BindModel(this.rationCardControl, this.model.educationLoanDetails, (x: EducationLoan) => x.rationCardNo, this.diposableObject);
    this.rationCardControl.setValidators([Validators.required]);

    this.fatherAnnualIncomeControl = new FormControl();
    BindModel(this.fatherAnnualIncomeControl, this.model.educationLoanDetails, (x: EducationLoan) => x.annualIncome, this.diposableObject);
    this.fatherAnnualIncomeControl.setValidators([Validators.required]);

    this.educationalLoanForm = new FormGroup({
      courseFeeControl: this.courseFeeControl,
      courseControl: this.courseControl,
      fatherNameContorl: this.fatherNameContorl,
      fatherOccupationControl: this.fatherOccupationControl,
      fatherTotalExpControl: this.fatherTotalExpControl,
      fatherExpInCurrenEmployer: this.fatherExpInCurrenEmployer,
      rationCardControl: this.rationCardControl,
      fatherAnnualIncomeControl: this.fatherAnnualIncomeControl,
    });

    this.annualIncomeControl = new FormControl();
    BindModel(this.annualIncomeControl, this.model.homeLoan, (x: PersonalLoan) => x.annualPersonalIncome, this.diposableObject);
    this.annualIncomeControl.setValidators([Validators.required]);

    this.companyNameControl = new FormControl();
    BindModel(this.companyNameControl, this.model.homeLoan, (x: PersonalLoan) => x.companyName, this.diposableObject);
    this.companyNameControl.setValidators([Validators.required]);

    this.designationControl = new FormControl();
    BindModel(this.designationControl, this.model.homeLoan, (x: PersonalLoan) => x.designation, this.diposableObject);
    this.designationControl.setValidators([Validators.required]);

    this.totalExpControl = new FormControl();
    BindModel(this.totalExpControl, this.model.homeLoan, (x: PersonalLoan) => x.totalExp, this.diposableObject);
    this.totalExpControl.setValidators([Validators.required]);

    this.expInCurrenEmployeer = new FormControl();
    BindModel(this.expInCurrenEmployeer, this.model.homeLoan, (x: PersonalLoan) => x.expWithCompany, this.diposableObject);
    this.expInCurrenEmployeer.setValidators([Validators.required]);

    this.homeLoanForm = new FormGroup({
      annualIncomeControl: this.annualIncomeControl,
      companyNameControl: this.companyNameControl,
      designationControl: this.designationControl,
      totalExpControl: this.totalExpControl,
      expInCurrenEmployeer: this.expInCurrenEmployeer,
    });

    this.loanForm = new FormGroup({
      loanTypeControl: this.loanTypeControl,
      loanAmountControl: this.loanAmountControl,
      loanAppDateControl: this.loanAppDateControl,
      loanIssueDateControl: this.loanIssueDateControl,
      rateOfIntrestContorl: this.rateOfIntrestContorl,
      loanTenureControl: this.loanTenureControl,
    });


  }

  AutoCalculation() {

    // this.loanTypeControl.valueChanges//.pipe(filter(x=>this.dobControl.valid))
    //   .subscribe(x => {
    //     if (this.model.loanType == LoanType.Home) {
    //       this.model.LoanDetials = new PersonalLoan();
    //     }
    //     else if (this.model.loanType == LoanType.Personal) {
    //       this.model.LoanDetials = new PersonalLoan();
    //     }
    //     else if (this.model.loanType == LoanType.Education) {
    //       this.model.LoanDetials = new EducationLoan();
    //     }
    //     else {
    //       this.model = null;
    //     }

    //   });
  }

  // GetUserCitizenStatus(value: any): CitizenshipStatus {
  //   const today = new Date;
  //   const dob = new Date(value);
  //   let day = today.getDate();
  //   let month = today.getMonth();
  //   let year = today.getFullYear();

  //   if (isSenior(day, month, year, dob)) {
  //     return CitizenshipStatus.Senior;
  //   }
  //   else if (isMajor(day, month, year, dob)) {
  //     return CitizenshipStatus.Normal;
  //   }
  //   else {
  //     return CitizenshipStatus.Minor;
  //   }

  // }

  onLoanSave() {

    FormValidator.Validate(this.loanForm);
    if (this.loanForm.valid) {
      // if (this.isUpdateExisting) {
      //   this.service.UpdateCustomer(this.model).subscribe(x => { });
      // }
      // else {
       // var custUid = this.getRandomInt(1, 999);
       // this.model.customerUid = "R_" + this.pad(custUid, 3);
        this.service.AddNewLoan(this.model).subscribe(x => { });
     // }
    }
  }

}
