import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaClientesComponent } from './clientes/tabla-clientes/tabla-clientes.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { ActualizarClienteComponent } from './clientes/actualizar-cliente/actualizar-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaClientesComponent,
    CrearClienteComponent,
    ActualizarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
