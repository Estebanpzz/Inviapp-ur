import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { LoginComponent } from './login/login.component';
import { SingUpComponent } from './singup/singup.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    LoginComponent,
    SingUpComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
