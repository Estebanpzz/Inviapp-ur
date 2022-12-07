import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProductsComponent } from './products/products.component';
import { InputsComponent } from './inputs/inputs.component';
import { RegproductsComponent } from './regproducts/regproducts.component';


const routes: Routes = [
  { path: '', pathMatch:'full', component: DashboardComponent },
{ path: 'products', component: ProductsComponent },
{ path: 'inputs', component: InputsComponent },
{ path: 'regproducts', component: RegproductsComponent },
{ path: '**',redirectTo: '', pathMatch: 'full' },
];
@NgModule({
  imports: [
     CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
