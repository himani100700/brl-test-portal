import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SuccessmsgComponent } from './successmsg/successmsg.component';

const routes: Routes = [ {path:"",redirectTo:'/home',pathMatch:"full"},
{path:"home",component: HomeComponent},
{path:"signin",component: SigninComponent},
{path:"signup",component: SignupComponent},
{path:"successmsg",component: SuccessmsgComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }