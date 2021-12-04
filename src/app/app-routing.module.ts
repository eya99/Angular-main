import { BoardAdminComponent } from './back-office/board-admin/board-admin.component';
import { RegisterComponent } from './front-office/register/register.component';
import { LoginComponent } from './front-office/login/login.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./front-office/front-office.module').then(m => m.FrontOfficeModule)
    },
    {
    path: 'back',
      loadChildren: () => import('./back-office/back-office.module').then(m => m.BackOfficeModule)
      },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
