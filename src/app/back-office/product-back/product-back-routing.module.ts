import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ListProductComponent } from './list-product/list-product.component';
import { MainProductComponent } from './main-product/main-product.component';

const routes: Routes = [

{  path: '',component: MainProductComponent,  children: [
  {
    path: '',
    component: ListProductComponent,
    children: [{ path: 'addproduit', component: AddproductComponent }],
  },
]
}



];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductBackRoutingModule { }
