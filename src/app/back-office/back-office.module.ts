import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOfficeRoutingModule } from './back-office-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';



 


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    BodyComponent,
    BoardAdminComponent,
  ],
  imports: [
    CommonModule,
    BackOfficeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class BackOfficeModule { }
