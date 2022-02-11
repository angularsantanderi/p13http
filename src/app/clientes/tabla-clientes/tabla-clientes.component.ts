import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente.model';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-tabla-clientes',
  templateUrl: './tabla-clientes.component.html',
  styleUrls: ['./tabla-clientes.component.css']
})
export class TablaClientesComponent implements OnInit {

  clientes: Array<Cliente> = [];
  formSearch: FormGroup;
  spinner: boolean = false;
  
  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.formSearch = new FormGroup({
      search: new FormControl('')
    })
    // this.cargarClientes();
    this.searchClientes();
  }

  cargarClientes(): void {
    this.clientesService.getClientes()
                        .subscribe((clientes: Array<Cliente>) => {
                          this.clientes = clientes;
                        }, (err: any) => {
                          console.log(err);
                        })
  }

  searchClientes() {
    this.formSearch.valueChanges
                   .pipe()
                   .subscribe(data => {
                       this.spinner = true;
                       if(data.search.length === 0) {
                          this.spinner = false;
                           this.clientes = [];
                       } else {
                          this.clientesService.searchClientes(data.search)
                                              .subscribe({
                                                  next: (resp: any) => {
                                                            this.spinner = false;
                                                            this.clientes = resp.clientes;
                                                      },
                                                  error: (err: any) => console.log(err)
                                              })
                       }
                   })
}



}
