import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './ui/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './ui/customer/customer.component';
import { LoansBlotterComponent } from './ui/loans/loans-blotter/loans-blotter.component';
import { LoansEditorComponent } from './ui/loans/loans-editor/loans-editor.component';
import { ControlValidationDirective } from './directives/validation.control.directive';
import { FormSubmitDirective } from './directives/formsubmit.validator.directive';
import { ErrorComponent } from './ui/error/error.component';
import { EnumKeyValueListPipe } from './pipes/enumToValueTransformPipe';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './service/auth-gurad.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { DateValueAccessor } from './directives/date.input.directive';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { RepositoryModule } from './repositories/repository.module';
import { ComboboxComponent } from './ui/combobox/combobox.component';
import { DefaultComponent } from './ui/default/default.component';

@NgModule({
  declarations: [
    EnumKeyValueListPipe,
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    CustomerComponent,
    LoansBlotterComponent,
    LoansEditorComponent,
    ControlValidationDirective,
    FormSubmitDirective,
    DateValueAccessor,
    ErrorComponent,
    ComboboxComponent,
    DefaultComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ name: 'Bms DevTols', maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    RepositoryModule
  ],
  providers: [AuthService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
