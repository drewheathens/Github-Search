import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { FormsService } from './form/Forms.service';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: "form", component: FormComponent },
  // { path: "search", component: SearchComponent }

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
  ],

  imports: [
    AppRoutingModule
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgProgressModule,
    NgProgressHttpModule,


  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
