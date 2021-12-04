import { RayonDetailComponent } from './rayon-detail/rayon-detail.component';
import { RayonListComponent } from './rayon-list/rayon-list.component';
import { MainRayonComponent } from './main-rayon/main-rayon.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainRayonComponent,
    children: [
      {
        path: '',
        component: RayonListComponent,
      },
      {
        path: 'detailrayon/:id',
        component: RayonDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RayonRoutingModule {}
