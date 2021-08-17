import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { LoginModel } from 'src/app/models/login.model';
import { RootState } from 'src/app/repositories/reducer/repository.reducer';
import { AuthService } from 'src/app/service/auth.service';
import { BindModel } from 'src/app/shared/extentions/form.control.Extensions';
import { CustomePatternValidation } from 'src/app/validators/custome.pattern.validator';
import * as RepositoryActions from 'src/app/repositories/actions/repository.action';

@Component({
  selector: 'bms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  diposableObject: Subject<void> = new Subject<void>();

  model: LoginModel;
  loginForm: FormGroup;
  userNameControl: FormControl;
  passwordControl: FormControl;

  constructor(private authService: AuthService,private router:Router,private store:Store<RootState>) {  }

  ngOnInit(): void {
    this.model = new LoginModel();
    this.model.customerId = "user";
    this.model.passWord = "user";

    this.initializeFormsControl();

  }

  initializeFormsControl() {

    this.userNameControl = new FormControl();
    BindModel(this.userNameControl, this.model, (x: LoginModel) => x.customerId, this.diposableObject);
    this.userNameControl.setValidators([Validators.required]);

    this.passwordControl = new FormControl();
    BindModel(this.passwordControl, this.model, (x: LoginModel) => x.passWord, this.diposableObject);
    this.passwordControl.setValidators([Validators.required]);

    this.loginForm = new FormGroup({
      userNameControl: this.userNameControl,
      passwordControl: this.passwordControl,
    });

  }

  onLoginClick() {
    this.authService.login(this.userNameControl.value, this.passwordControl.value).subscribe(x => {
      this.store.dispatch(RepositoryActions.loadGenders());
      this.router.navigateByUrl('/updateProfile/1');
    });
  }

}
