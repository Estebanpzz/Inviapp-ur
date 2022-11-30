import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { InputsComponent } from './inputs/inputs.component';
import { OutputsComponent } from './outputs/outputs.component';
import { RegproductsComponent } from './regproducts/regproducts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from "@angular/forms"
import{ RouterModule} from '@angular/router'
@NgModule({
  declarations: [
    
    DashboardComponent,
    HomeComponent,
    InputsComponent,
    OutputsComponent,
    RegproductsComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
  ],
})
export class DashboardModule { }
