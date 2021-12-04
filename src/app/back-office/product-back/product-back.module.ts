import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductBackRoutingModule } from './product-back-routing.module';
import { MainProductComponent } from './main-product/main-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UpdateProductComponent } from './update-product/update-product.component';

@NgModule({
  declarations: [
    MainProductComponent,
    ListProductComponent,
    AddproductComponent,
    UpdateProductComponent
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    ProductBackRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class ProductBackModule { }
