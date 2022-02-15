import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ListPage } from './list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: ListPage
      }
    ])
  ],
  schemas:[NO_ERRORS_SCHEMA],
  declarations: [ListPage]
})
export class ListPageModule {}
