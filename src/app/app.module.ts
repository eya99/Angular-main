import { RegisterComponent } from './front-office/register/register.component';
import { LoginComponent } from './front-office/login/login.component';
import { BoardAdminComponent } from './back-office/board-admin/board-admin.component';
import { ProfileComponent } from './front-office/profile/profile.component';
import { HomeComponent } from './front-office/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng5SliderModule } from 'ng5-slider';

import { authInterceptorProviders } from '../helpers/AuthInterceptor';



@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
    ,
    
    HttpClientModule,

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
