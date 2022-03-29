import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { LoginComponent } from './componentes/login/login.component';
import { LoginErrorPasswordComponent } from './componentes/loginErrorPassword/loginErrorPassword.component';
import { LoginErrorUsuarioComponent } from './componentes/loginErrorUsuario/loginErrorUsuario.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { VideojuegosComponent } from './componentes/videojuegos/videojuegos.component';

const routes: Routes = [
   {
     path : '',
     component : LoginComponent
   },
   {
     path : 'videojuegos',
     component : VideojuegosComponent
   },
   {
     path : 'videojuegos/:id/:titulo/:compania/:valoracion/:img',
     component : VideojuegosComponent
   },
   {
     path : 'menu',
     component : MenuComponent
   },
   {
     path : 'login',
     component : LoginComponent
   },
   {
     path : 'bienvenido',
     component : BienvenidoComponent
   },
   {
     path : 'loginErrorUsuario',
     component : LoginErrorUsuarioComponent
   }, 
   {
    path : 'loginErrorPassword',
    component : LoginErrorPasswordComponent
  }, 
   {
     path : 'contacto',
     component : ContactoComponent
   },
   {
     path : 'nosotros',
     component : NosotrosComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
