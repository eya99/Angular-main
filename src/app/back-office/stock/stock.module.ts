import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { MainStockComponent } from './main-stock/main-stock.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';

@NgModule({
  declarations: [MainStockComponent, AddStockComponent, StockListComponent, StockDetailComponent, UpdateStockComponent],
  imports: [
    CommonModule,
    StockRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class StockModule {}
