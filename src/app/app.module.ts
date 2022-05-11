import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuUserComponent } from './vistas/menu-user/menu-user.component';
import { MenuTutorComponent } from './vistas/menu-tutor/menu-tutor.component';
import { MenuGestorComponent } from './vistas/menu-gestor/menu-gestor.component';
import { LoginComponent } from './forms/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './forms/register/register.component';
import { HomeComponent } from './vistas/home/home.component';
import { ProfileComponent } from './vistas/profile/profile.component';
import { AuthInterceptor } from './helpers/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    MenuUserComponent,
    MenuTutorComponent,
    MenuGestorComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
