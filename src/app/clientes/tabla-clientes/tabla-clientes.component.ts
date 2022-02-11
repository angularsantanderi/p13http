import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-tabla-clientes',
  templateUrl: './tabla-clientes.component.html',
  styleUrls: ['./tabla-clientes.component.css']
})
export class TablaClientesComponent implements OnInit {

  clientes: Array<any> = [];

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.cargarClientes();
  }

  cargarClientes(): void {
    this.clientesService.getClientes()
                        .subscribe((resp: any) => {
                          this.clientes = resp.clientes;
                        }, (err: any) => {
                          console.log(err);
                        })
  }



}
