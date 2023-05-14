import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MovieViewComponentComponent } from './movie-view-component/movie-view-component.component';
import { RegisterComponent } from './register/register.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

const routes: Routes = [
  {path:"" ,redirectTo:"login", pathMatch:"full"},
{path:"login",component:LoginComponent},
{path:"register",component:RegistrationFormComponent},
{path:"home",component:DashboardComponent},
{path:"contact-us",component:ContactUsComponent},
{path:"movie-view/:id",component:MovieViewComponentComponent},
{path:"**",redirectTo:"home", pathMatch:"full"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
