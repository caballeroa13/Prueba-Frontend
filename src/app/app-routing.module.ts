import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
{ path: 'inicio', loadChildren: () => import('./paginas/inicio/inicio.module').then(m => m.InicioModule) }, 
{ path: 'usuario', loadChildren: () => import('./paginas/usuario/usuario.module').then(m => m.UsuarioModule) }, 
{ path: 'admin', loadChildren: () => import('./paginas/admin/admin.module').then(m => m.AdminModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
