import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as RefModels from './models/refdata.model';

@Injectable()
export class RepositoryService {

    constructor(private httpService: HttpClient) {
       
    }

    GetGenders()
    {
        let header = new HttpHeaders();
        let params = new HttpParams();
        header.append('Contetnt-Type', 'application/json');
        //params = params.set("id", id);
        let requestOptions = { headers: header };
            return this.httpService.get<RefModels.Gender[]>(environment.ApiService + "/refdata/genderTypes");

    }

    GetAccountTypes()
    {
        let header = new HttpHeaders();
        let params = new HttpParams();
        header.append('Contetnt-Type', 'application/json');
        //params = params.set("id", id);
        let requestOptions = { headers: header };
            return this.httpService.get<RefModels.AccountTypes[]>(environment.ApiService + "/refdata/accountTypes");
    }

    GetGuardian()
    {
        let header = new HttpHeaders();
        let params = new HttpParams();
        header.append('Contetnt-Type', 'application/json');
        //params = params.set("id", id);
        let requestOptions = { headers: header };
            return this.httpService.get<RefModels.Guardian[]>(environment.ApiService + "/refdata/guardianTypes");
    }

    GetIdentificationProofTypes()
    {
        let header = new HttpHeaders();
        let params = new HttpParams();
        header.append('Contetnt-Type', 'application/json');
        //params = params.set("id", id);
        let requestOptions = { headers: header };
            return this.httpService.get<RefModels.IdentificationProofTypes[]>(environment.ApiService + "/refdata/idProofTypes");
    }

    GetLoanTypes()
    {
        let header = new HttpHeaders();
        let params = new HttpParams();
        header.append('Contetnt-Type', 'application/json');
        //params = params.set("id", id);
        let requestOptions = { headers: header };
            return this.httpService.get<RefModels.LoanTypes[]>(environment.ApiService + "/refdata/loanTypes");
    }

    GetMaritalStatus()
    {
        let header = new HttpHeaders();
        let params = new HttpParams();
        header.append('Contetnt-Type', 'application/json');
        //params = params.set("id", id);
        let requestOptions = { headers: header };
            return this.httpService.get<RefModels.MaritalStatus[]>(environment.ApiService + "/refdata/maritalStatuses");
    }

   
} 