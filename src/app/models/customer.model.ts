import { AccountType, Citizenship, CitizenshipStatus, Gender, GuradianType, IdentityDocumentType, MaritalStatus } from './enums';

export class CustomerModel {

    customerUid: any | string;
    name: string;
    userName: string;
    password: string;
    guardianTypeId: string | number;
    guardianName: string;
    address: string;
    citizenship: string | number;
    country: string;
    state: string;
    email: string;
   
    maritalStatusId: string | number;
    contactNo: string;
    dob: Date | string;
    registrationDate: Date | string;
    accountTypeId: string | number;
    branchName: string;
    citizenStatus: string | number;
    initialDepositAmount: any | string;
    idProofTypeId: string | number;
    identificationDocNo: string;
    referenceAccountHolderName: string;
    referenceAccountHolderAccountNo: string;
    referenceAccountHolderAddress: string;

    genderTypeId: string | number;

    //dto: any;

    InitializeWithDefaultValue() {

        this.customerUid = "";
        this.name = "";
        this.userName = "";
        this.password = "";
        this.guardianTypeId = 0;
        this.guardianName = "";
        this.address = "";
        this.citizenship = 0;
        this.country = "";
        this.state = "";
        this.email = "";
        this.genderTypeId = 1;
        this.maritalStatusId = 0;
        this.contactNo = "";
        this.dob = new Date();
        this.registrationDate = new Date();
        this.accountTypeId = 0
        this.branchName = "";
        this.citizenStatus = 0;
        this.initialDepositAmount = "";
       this.idProofTypeId = 0;
        this.identificationDocNo = "";
        this.referenceAccountHolderName = "";
        this.referenceAccountHolderAccountNo = "";
        this.referenceAccountHolderAddress = "";
        this.idProofTypeId=0;

    }

    /**
     *
     */
    // protected static SInit = (() => {
    //     CustomerModel.prototype.customerUid = "";
    //     CustomerModel.prototype.name = "";
    //     CustomerModel.prototype.userName = "";
    //     CustomerModel.prototype.password = "";
    //     CustomerModel.prototype.guardianTypeId = "";
    //     CustomerModel.prototype.guardianName = "";
    //     CustomerModel.prototype.address = "";
    //     CustomerModel.prototype.citizenship = "";
    //     CustomerModel.prototype.country = "";
    //     CustomerModel.prototype.state = "";
    //     CustomerModel.prototype.email = "";
    //     CustomerModel.prototype.genderTypeId = "";
    //     CustomerModel.prototype.maritalStatusId = "";
    //     CustomerModel.prototype.contactNo = "";
    //     CustomerModel.prototype.dob = "";
    //     CustomerModel.prototype.registrationDate = "";
    //     CustomerModel.prototype.accountTypeId = "";
    //     CustomerModel.prototype.branchName = "";
    //     CustomerModel.prototype.citizenStatus = "";
    //     CustomerModel.prototype.initialDepositAmount = "";
    //     CustomerModel.prototype.idProofTypeId = "";
    //     CustomerModel.prototype.identificationDocNo = "";
    //     CustomerModel.prototype.referenceAccountHolderName = "";
    //     CustomerModel.prototype.referenceAccountHolderAccountNo = "";
    //     CustomerModel.prototype.referenceAccountHolderAddress = "";

    // })();

}

