import { AddStockComponent } from './add-stock/add-stock.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainStockComponent } from './main-stock/main-stock.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';

const routes: Routes = [
  {
    path: '',
    component: MainStockComponent,
    children: [
      {
        path: '',
        component: StockListComponent,

        children: [{ path:
           'addstock', component: AddStockComponent }]
           ,
      },
      {
        path: 'detailstock/:id',
        component: StockDetailComponent,

      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockRoutingModule {}
