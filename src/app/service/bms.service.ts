import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CustomerModel } from '../models/customer.Model';
import { AutoMapper } from './auto.map';
import { map } from 'rxjs/operators';
import { ServiceMapper } from './service.mapper';
import { LoanDetails } from '../models/loan-model';

@Injectable({
  providedIn: 'root'
})
export class BmsService {

  constructor(private httpService: HttpClient) { }

  // getAllParentTasksForProject(userId: string, pwd: string): Observable<boolean> {
  //   let header = new HttpHeaders();
  //   let params = new HttpParams();
  //   header.append('Contetnt-Type', 'application/json');

  //   params = params.set("userName", userId);
  //   params = params.set("password", pwd);

  //   let requestOptions = { headers: header, params: params };
  //   return this.httpService.get<string>(environment.ApiService + "/auth", requestOptions).pipe(tap(x => {
  //     if (x == "Ok") {
  //       window.localStorage.setItem("loginId", x);
  //     }
  //     else {
  //       window.localStorage.removeItem("loginId");
  //     }
  //   }));

  // }

  GetCusomter(id: string) {
    let header = new HttpHeaders();
    let params = new HttpParams();
    header.append('Contetnt-Type', 'application/json');
    params = params.set("id", id);
    let requestOptions = { headers: header, params: params };

    return this.httpService.get(environment.ApiService + "/customer?id=" + id).pipe(map(x => ServiceMapper.MapCustomerDtoToModel(x)));
  }

  AddNewCusomter(cutomer: CustomerModel) {
    var dto = ServiceMapper.MapCustomerModelToDto(cutomer);
    return this.httpService.post(environment.ApiService + "/customer", dto);
  }


  UpdateCustomer(cutomer: CustomerModel) {
    let header = new HttpHeaders();
    let params = new HttpParams();
    header.append('Contetnt-Type', 'application/json');
    params = params.set("id", cutomer['CustomerId']);
    let requestOptions = { headers: header, params: params };
    var dto = ServiceMapper.MapCustomerModelToDto(cutomer);
    return this.httpService.put(environment.ApiService + "/customer", dto, requestOptions);
  }

  AddNewLoan(loan: LoanDetails) {
    var dto = ServiceMapper.MapLoanModelToDto(loan);
    return this.httpService.post(environment.ApiService + "/account", dto);
  }

}