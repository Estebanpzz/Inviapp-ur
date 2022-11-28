import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { LoginComponent } from './login/login.component';
import { SingUpComponent } from './singup/singup.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: FrontpageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SingUpComponent},
  {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
