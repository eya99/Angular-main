import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './../back-office/board-admin/board-admin.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CartDetailsComponent } from './cart/cart-details/cart-details.component';
import {DetailfactureComponent  } from './cart/detailfacture/detailfacture.component';
import { FactureComponent } from './cart/facture/facture.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
const routes: Routes = [       
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: ProfileComponent },
  { path: 'cart-details', component: CartDetailsComponent },
  { path: 'factures', component: FactureComponent },
  { path: 'detailfacture/:id', component: DetailfactureComponent },

  {  path: '', component: HomeComponent,
    children: [
      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
        },
    ],
  },
  /* { path: 'product', component: ProductComponent },
{ path: '', redirectTo: 'product', pathMatch: 'full' }, */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontOfficeRoutingModule {}
