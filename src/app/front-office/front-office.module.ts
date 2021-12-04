import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { EndNavComponent } from './end-nav/end-nav.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontOfficeRoutingModule } from './front-office-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { CartStatusComponent } from './cart/cart-status/cart-status.component';
import { CartDetailsComponent } from './cart/cart-details/cart-details.component';
import { FactureComponent } from './cart/facture/facture.component';
import { DetailfactureComponent } from './cart/detailfacture/detailfacture.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [HomeComponent,
    HeaderComponent, 
    EndNavComponent,
    FooterComponent, 
    LoginComponent, 
    RegisterComponent, 
    ProfileComponent,
 CartStatusComponent ,
 CartDetailsComponent,


 FactureComponent,
 DetailfactureComponent,
],
  imports: [
    CommonModule, 
    FrontOfficeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
  
  ],
})
export class FrontOfficeModule {}
