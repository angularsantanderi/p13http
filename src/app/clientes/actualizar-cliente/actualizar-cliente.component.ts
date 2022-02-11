import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent implements OnInit {

  formCliente: FormGroup;
  _id: string;
  editar: boolean = false;

  constructor(private clientesService: ClientesService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.formCliente = new FormGroup({
      nombre: new FormControl(''),
      actividades: new FormControl(''),
      direccion: new FormControl(''),
      localidad: new FormControl(''),
    })
    this._id = this.activatedRoute.snapshot.params['_id'];
    this.clientesService.getClienteBy_id(this._id)
                        .subscribe({
                          next: (resp: any) => {
                            this.formCliente.get('nombre').patchValue(resp.cliente.nombre);
                            this.formCliente.get('actividades').patchValue(resp.cliente.actividades);
                            this.formCliente.get('direccion').patchValue(resp.cliente.direccion);
                            this.formCliente.get('localidad').patchValue(resp.cliente.localidad);
                          },
                          error: (err: any) => console.log(err)
                        })
  }

  toggleEditar() {
    this.editar = !this.editar;
  }

  actualizarCliente() {
    this.clientesService.updateClienteBy_id(this._id, this.formCliente.value)
                        .subscribe({
                          next: (resp: any) => this.router.navigate(['/']),
                          error: (err: any) => console.log(err)
                        })
  }

}
