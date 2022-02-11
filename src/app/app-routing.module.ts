import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarClienteComponent } from './clientes/actualizar-cliente/actualizar-cliente.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { TablaClientesComponent } from './clientes/tabla-clientes/tabla-clientes.component';

const routes: Routes = [
  {path: '', component: TablaClientesComponent},
  {path: 'crear-cliente', component: CrearClienteComponent},
  {path: 'actualizar-cliente/:_id', component: ActualizarClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
