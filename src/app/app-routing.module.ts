import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './forms/login/login.component';
import { MenuGestorComponent } from './vistas/menu-gestor/menu-gestor.component';
import { MenuTutorComponent } from './vistas/menu-tutor/menu-tutor.component';
import { MenuUserComponent } from './vistas/menu-user/menu-user.component';
import { RegisterComponent } from './forms/register/register.component';
import { HomeComponent } from './vistas/home/home.component';
import { ProfileComponent } from './vistas/profile/profile.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: MenuUserComponent },
  { path: 'mod', component: MenuTutorComponent },
  { path: 'admin', component: MenuGestorComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
