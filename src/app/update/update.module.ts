
import { UpdatePageRoutingModule } from './update-routing.module';

import { UpdatePage } from './update.page';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MDBBootstrapModule.forRoot(),
    UpdatePageRoutingModule
  ],
  schemas:[NO_ERRORS_SCHEMA],
  declarations: [UpdatePage]
})
export class UpdatePageModule {}
