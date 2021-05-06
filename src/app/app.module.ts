import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './paginas/admin/admin.module';
import { UsuarioModule } from './paginas/usuario/usuario.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeaderModule } from './shared/components/header/header.module';
import {  NbCardModule, NbLayoutModule, NbListModule, NbThemeModule, NbButtonModule} from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    AdminModule,
    UsuarioModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbListModule,
    NbCardModule,
    NbButtonModule,
    //BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
