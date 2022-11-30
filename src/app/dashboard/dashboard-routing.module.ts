import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { InputsComponent } from './inputs/inputs.component';
import { OutputsComponent } from './outputs/outputs.component';
import { RegproductsComponent } from './regproducts/regproducts.component';


const routes: Routes = [
  { path: '', pathMatch:'full', component: DashboardComponent },
{ path: 'home', component: HomeComponent },
{ path: 'inputs', component: InputsComponent },
{ path: 'outputs', component: OutputsComponent },
{ path: 'regproducts', component: RegproductsComponent },
{ path: '**',redirectTo: '', pathMatch: 'full' },
];
@NgModule({
  imports: [
     CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
