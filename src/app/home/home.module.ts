import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomePage } from './home.page';
import { SidebarModule } from 'ng-sidebar';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MDBBootstrapModule.forRoot(),
    SidebarModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  schemas:[NO_ERRORS_SCHEMA],
  declarations: [HomePage]
})
export class HomePageModule {}
