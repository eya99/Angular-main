import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RayonRoutingModule } from './rayon-routing.module';
import { MainRayonComponent } from './main-rayon/main-rayon.component';
import { AddRayonComponent } from './add-rayon/add-rayon.component';
import { RayonDetailComponent } from './rayon-detail/rayon-detail.component';
import { RayonListComponent } from './rayon-list/rayon-list.component';
import { UpdateRayonComponent } from './update-rayon/update-rayon.component';


@NgModule({
  declarations: [
    MainRayonComponent,
    AddRayonComponent,
    RayonDetailComponent,
    RayonListComponent,
    UpdateRayonComponent
  ],
  imports: [
    CommonModule,
    RayonRoutingModule,
    ReactiveFormsModule,
  ]
})
export class RayonModule { }
