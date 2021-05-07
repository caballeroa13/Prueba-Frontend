import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {  NbCardModule, NbLayoutModule, NbListModule, NbThemeModule, NbButtonModule, NbUserModule} from '@nebular/theme'; 



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NbLayoutModule,
    NbListModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbCardModule,
    NbButtonModule,
    NbUserModule
  ],
  exports: [AdminComponent]
})
export class AdminModule { }
