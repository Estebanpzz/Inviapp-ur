import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { LoginComponent } from './login/login.component';
import { SingUpComponent } from './singup/singup.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: FrontpageComponent, ...canActivate(() => redirectLoggedInTo(['/dashboard']))},
  {path: 'login', component: LoginComponent, ...canActivate(() => redirectLoggedInTo(['/dashboard']))},
  {path: 'signup', component: SingUpComponent},
  {path: 'dashboard', ...canActivate(() => redirectUnauthorizedTo([''])), loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
