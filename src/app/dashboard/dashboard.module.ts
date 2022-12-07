import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProductsComponent } from './products/products.component';
import { InputsComponent } from './inputs/inputs.component';

import { RegproductsComponent } from './regproducts/regproducts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import{ RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DashboardComponent,
    ProductsComponent,
    InputsComponent,
    RegproductsComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class DashboardModule { }
