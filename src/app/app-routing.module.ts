import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from './service/auth-gurad.service';
import { CustomerComponent } from './ui/customer/customer.component';
import { DefaultComponent } from './ui/default/default.component';
import { LoansEditorComponent } from './ui/loans/loans-editor/loans-editor.component';
import { LoginComponent } from './ui/login/login.component';

export const routes: Routes = [

  {
    path: '',
    component: LoginComponent,
    //canActivate: [AuthGuard] 
  },
  {
    path: 'newloan',
    canActivate:[AuthGuard],
    component: LoansEditorComponent,
        //canActivate: [AuthGuard] 
  },
  {
    path: 'signup',
    component: CustomerComponent,
    //canActivate: [AuthGuard] 
  },
  {
    path: 'updateProfile/:id',
    canActivate:[AuthGuard],
    component: CustomerComponent,
    pathMatch:'full'
    //canActivate: [AuthGuard] 
  },
  {
    path: 'signout',
    canActivate:[AuthGuard],
    component: LoginComponent,
    //canActivate: [AuthGuard] 
  },
  {
    path: 'default',
    //canActivate:[AuthGuard],
    component: DefaultComponent,
    //canActivate: [AuthGuard] 
  },
//   {
  
//     path: "",
//     component: LoginComponent
//   },
//   {
//     path: "**",
//     component:LoginComponent
//   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
