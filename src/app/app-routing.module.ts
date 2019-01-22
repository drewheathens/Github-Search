import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {FormsService} from './form/Forms.service';
const routes: Routes = [];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  imports: [RouterModule.forRoot(routes)],
  // exports: [RouterModule],

})
export class AppRoutingModule { }
