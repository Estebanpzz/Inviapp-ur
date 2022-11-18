import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { InputsComponent } from './inputs/inputs.component';
import { OutputsComponent } from './outputs/outputs.component';
import { RegproductsComponent } from './regproducts/regproducts.component';

const routes: Routes = [{ path: '', component: DashboardComponent },
//{path: '', component: HomeComponent,children: [{path: '',loadChildren: () => import('./home/home.component').then(x=>x.HomeComponent)}]},
{ path: 'home', component: HomeComponent },
{ path: 'inputs', component: InputsComponent },
{ path: 'outputs', component: OutputsComponent },
{ path: 'regproducts', component: RegproductsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
