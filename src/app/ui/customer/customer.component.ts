import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { CustomerModel } from 'src/app/models/customer.Model';
import { AccountType, Citizenship, CitizenshipStatus, Gender, GuradianType, IdentityDocumentType, MaritalStatus } from 'src/app/models/enums';
import { BmsService } from 'src/app/service/bms.service';
import { isMajor, isSenior } from 'src/app/shared/date.utils';
import { RootState } from 'src/app/state/app.state';
import { AccountDateValidator } from 'src/app/validators/account.date.validators';
import { CustomePatternValidation } from 'src/app/validators/custome.pattern.validator';
import { DefaultValueValidation } from 'src/app/validators/default.value.validator';
import { FormValidator } from 'src/app/validators/form.validator';
import { BindModel } from '../../shared/extentions/form.control.Extensions';
import * as RefDataModel from 'src/app/repositories/models/refdata.model';
import * as RepositorySelectors from 'src/app/repositories/selectors/repoitory.selectors';
import * as RepositoryActions from 'src/app/repositories/actions/repository.action';
import { Console } from 'console';
import { initializeRepositories } from 'src/app/repositories/repository.util';


@Component({
  selector: 'bms-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  isUpdateExisting = false;
  diposableObject: Subject<void> = new Subject<void>();

  model: CustomerModel;
  customerFormGroup: FormGroup;
  nameControl: FormControl;
  userNameControl: FormControl;
  emailAddressControl: FormControl;
  contactNoControl: FormControl;

  passwordControl: FormControl;
  dobControl: FormControl;
  addressControl: FormControl;
  stateControl: FormControl;
  countryControl: FormControl;

  citizenshipControl: FormControl;
  citizenStatusControl: FormControl;

  genderControl: FormControl;


  identityProofControl: FormControl;
  identityDocNoControl: FormControl;
  accountTypeControl: FormControl;
  branchNameControl: FormControl;
  initialDepositAmountControl: FormControl;
  regDateControl: FormControl;

  refAccHolderNameControl: FormControl;
  refAccHolderAccNoControl: FormControl;
  refAccHolderAddress: FormControl;

  guradianTypeControl: FormControl;
  guardianNameControl: FormControl;

  maritalStatusControl: FormControl;

  //guradianMapping;
  //guradinaTypeValues=Object.values(GuradianType);
  guradinaType = GuradianType;
  citizenship = Citizenship;
  gender = Gender;
  identityDocumentType = IdentityDocumentType;
  accountType = AccountType;
  maritalStatus = MaritalStatus;
  citizenshipStatus = CitizenshipStatus;

  constructor(private router: Router,
    private activeRoute: ActivatedRoute,
    private service: BmsService,
    private store:Store<RootState>) {
     
    //this.guradianMapping = GuradianTypeMapping;
  }

  genderes$:Observable<RefDataModel.Gender[]>;
  accountTypes$:Observable<RefDataModel.AccountTypes[]>;
  guradianTypes$:Observable<RefDataModel.Guardian[]>;
  idProofTypes$:Observable<RefDataModel.IdentificationProofTypes[]>;
  loanTypes$:Observable<RefDataModel.LoanTypes[]>;
  maritalStatusTpypes$:Observable<RefDataModel.MaritalStatus[]>;


  ngOnInit(): void {

    this.genderes$=this.store.select(RepositorySelectors.getGenders);
    this.accountTypes$=this.store.select(RepositorySelectors.getAccountTypes);
    this.guradianTypes$=this.store.select(RepositorySelectors.getGuardian);
    this.idProofTypes$=this.store.select(RepositorySelectors.getIdentificationProofTypes);
    this.loanTypes$=this.store.select(RepositorySelectors.getLoanTypes);
    this.maritalStatusTpypes$=this.store.select(RepositorySelectors.getMaritalStatus);

    initializeRepositories(this.store);

        this.model = this.getBlankCustomer();
    this.initializeFormsControl();
    this.AutoCalculation();

    if (this.activeRoute.snapshot.url.some(x => x.path == "updateProfile")) {
      this.service.GetCusomter(this.activeRoute.snapshot.params['id']).subscribe(x => {
        this.isUpdateExisting = true;
        this.model = x;
        this.initializeFormsControl();
        let status = this.GetUserCitizenStatus(x);
        this.model.citizenStatus = status;
        this.citizenStatusControl.setValue(status);
        this.AutoCalculation();
      });
    }

  }

  getBlankCustomer(): CustomerModel {
    let customer: CustomerModel = new CustomerModel();
    return customer;
  }

  initializeFormsControl() {

    this.nameControl = new FormControl();
    BindModel(this.nameControl, this.model, (x: CustomerModel) => x.name, this.diposableObject);
    this.nameControl.setValidators([Validators.required, CustomePatternValidation("^[A-Za-z ]*$", "Aplphabets and space only allowed")]);

    this.userNameControl = new FormControl();
    BindModel(this.userNameControl, this.model, (x: CustomerModel) => x.userName, this.diposableObject);
    this.userNameControl.setValidators([Validators.required]);


    this.emailAddressControl = new FormControl();
    BindModel(this.emailAddressControl, this.model, (x: CustomerModel) => x.email, this.diposableObject);
    this.emailAddressControl.setValidators([Validators.required, Validators.email]);

    this.passwordControl = new FormControl();
    BindModel(this.passwordControl, this.model, (x: CustomerModel) => x.password, this.diposableObject);
    this.passwordControl.setValidators([Validators.required]);

    this.contactNoControl = new FormControl();
    BindModel(this.contactNoControl, this.model, (x: CustomerModel) => x.contactNo, this.diposableObject);
    this.contactNoControl.setValidators([Validators.required, CustomePatternValidation("^[0-9]*$", "Numbers only allowed"), Validators.minLength(10), Validators.maxLength(10)]);

    this.dobControl = new FormControl();
    BindModel(this.dobControl, this.model, (x: CustomerModel) => x.dob, this.diposableObject);
    this.dobControl.setValidators([Validators.required, AccountDateValidator("Invalid DOB")]);

    this.addressControl = new FormControl();
    BindModel(this.addressControl, this.model, (x: CustomerModel) => x.address, this.diposableObject);
    this.addressControl.setValidators([Validators.required]);

    this.stateControl = new FormControl();
    BindModel(this.stateControl, this.model, (x: CustomerModel) => x.state, this.diposableObject);
    this.stateControl.setValidators([Validators.required]);

    this.countryControl = new FormControl();
    BindModel(this.countryControl, this.model, (x: CustomerModel) => x.country, this.diposableObject);
    this.countryControl.setValidators([Validators.required]);

    this.citizenshipControl = new FormControl();
    BindModel(this.citizenshipControl, this.model, (x: CustomerModel) => x.citizenship, this.diposableObject);
    this.citizenshipControl.setValidators([DefaultValueValidation(null, "Select an valid citizenship")]);

    this.citizenStatusControl = new FormControl();
    BindModel(this.citizenStatusControl, this.model, (x: CustomerModel) => x.citizenStatus, this.diposableObject);
    this.citizenStatusControl.setValidators([Validators.required]);

    this.genderControl = new FormControl();
    BindModel(this.genderControl, this.model, (x: CustomerModel) => x.genderTypeId, this.diposableObject);
    this.genderControl.setValidators([DefaultValueValidation(null, "Select an Gender")]);

    this.identityProofControl = new FormControl();
    BindModel(this.identityProofControl, this.model, (x: CustomerModel) => x.idProofTypeId, this.diposableObject);
    this.identityProofControl.setValidators([DefaultValueValidation(null, "Select Id Proof type")]);

    this.identityDocNoControl = new FormControl();
    BindModel(this.identityDocNoControl, this.model, (x: CustomerModel) => x.identificationDocNo, this.diposableObject);
    this.identityDocNoControl.setValidators([Validators.required]);

    this.accountTypeControl = new FormControl();
    BindModel(this.accountTypeControl, this.model, (x: CustomerModel) => x.accountTypeId, this.diposableObject);
    this.accountTypeControl.setValidators([DefaultValueValidation(null, "Select Account type")]);

    this.branchNameControl = new FormControl();
    BindModel(this.branchNameControl, this.model, (x: CustomerModel) => x.branchName, this.diposableObject);
    this.branchNameControl.setValidators([Validators.required]);

    this.initialDepositAmountControl = new FormControl();
    BindModel(this.initialDepositAmountControl, this.model, (x: CustomerModel) => x.initialDepositAmount, this.diposableObject);
    this.initialDepositAmountControl.setValidators([Validators.required]);

    this.regDateControl = new FormControl();
    BindModel(this.regDateControl, this.model, (x: CustomerModel) => x.registrationDate, this.diposableObject);
    this.regDateControl.setValidators([Validators.required]);

    this.refAccHolderNameControl = new FormControl();
    BindModel(this.refAccHolderNameControl, this.model, (x: CustomerModel) => x.referenceAccountHolderName, this.diposableObject);
    this.refAccHolderNameControl.setValidators([Validators.required]);

    this.refAccHolderAccNoControl = new FormControl();
    BindModel(this.refAccHolderAccNoControl, this.model, (x: CustomerModel) => x.referenceAccountHolderAccountNo, this.diposableObject);
    this.refAccHolderAccNoControl.setValidators([Validators.required]);

    this.refAccHolderAddress = new FormControl();
    BindModel(this.refAccHolderAddress, this.model, (x: CustomerModel) => x.referenceAccountHolderAddress, this.diposableObject);
    this.refAccHolderAddress.setValidators([Validators.required]);

    this.guradianTypeControl = new FormControl();
    BindModel(this.guradianTypeControl, this.model, (x: CustomerModel) => x.guardianTypeId, this.diposableObject);
    this.guradianTypeControl.setValidators([DefaultValueValidation(null, "Select Guardian Type")]);

    this.guardianNameControl = new FormControl();
    BindModel(this.guardianNameControl, this.model, (x: CustomerModel) => x.guardianName, this.diposableObject);
    this.guardianNameControl.setValidators([Validators.required]);

    this.maritalStatusControl = new FormControl();
    BindModel(this.maritalStatusControl, this.model, (x: CustomerModel) => x.maritalStatusId, this.diposableObject);
    this.maritalStatusControl.setValidators([DefaultValueValidation(null, "Select Marital Status")]);

    this.customerFormGroup = new FormGroup({
      nameControl: this.nameControl,
      userNameControl: this.userNameControl,
      emailAddressControl: this.emailAddressControl,
      passwordControl: this.passwordControl,
      contactNoControl: this.contactNoControl,
      dobControl: this.dobControl,
      addressControl: this.addressControl,
      stateControl: this.stateControl,
      countryControl: this.countryControl,
      citizenshipControl: this.citizenshipControl,
      citizenStatusControl: this.citizenStatusControl,
      genderControl: this.genderControl,
      identityProofControl: this.identityProofControl,
      identityDocNoControl: this.identityDocNoControl,
      accountTypeControl: this.accountTypeControl,
      branchNameControl: this.branchNameControl,
      initialDepositAmountControl: this.initialDepositAmountControl,
      regDateControl: this.regDateControl,
      refAccHolderNameControl: this.refAccHolderNameControl,
      refAccHolderAccNoControl: this.refAccHolderAccNoControl,
      refAccHolderAddress: this.refAccHolderAddress,
      guradianTypeControl: this.guradianTypeControl,
      guardianNameControl: this.guardianNameControl,
      maritalStatusControl: this.maritalStatusControl,
    });


  }

  AutoCalculation() {
    this.dobControl.valueChanges//.pipe(filter(x=>this.dobControl.valid))
      .subscribe(x => {
        let status = this.GetUserCitizenStatus(x);
        this.model.citizenStatus = status;
        this.citizenStatusControl.setValue(status);
      });
  }

  GetUserCitizenStatus(value: any): CitizenshipStatus {
    const today = new Date;
    const dob = new Date(value);
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();

    if (isSenior(day, month, year, dob)) {
      return CitizenshipStatus.Senior;
    }
    else if (isMajor(day, month, year, dob)) {
      return CitizenshipStatus.Normal;
    }
    else {
      return CitizenshipStatus.Minor;
    }

  }

  onUserSave() {

    FormValidator.Validate(this.customerFormGroup);
    if (this.customerFormGroup.valid) {
      if (this.isUpdateExisting) {
        this.service.UpdateCustomer(this.model).subscribe(x => { });
      }
      else {
        var custUid = this.getRandomInt(1, 999);
        this.model.customerUid = "R_" + this.pad(custUid, 3);
        this.service.AddNewCusomter(this.model).subscribe(x => { });
      }
    }
  }

  getRandomInt(min, max): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  pad(num: number, size: number): string {
    let s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  }

}
