import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { usuario_child_routes } from './components/usuario/usuario.routes';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{
  path: 'usuario/:id',
  component: UsuarioComponent,
  // importar rutas child aqui
  children: usuario_child_routes
},
{ path: '**', pathMatch: 'full', redirectTo: 'home' }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
