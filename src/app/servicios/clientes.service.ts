import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})

export class ClientesService {

  url = environment.urlAPICLientesEndpoint;

  constructor(private http: HttpClient) { }

  getClientes(): Observable<any> {
    return this.http.get(this.url)
                    .pipe(
                      map((resp: any) => {
                        const clientes: Array<Cliente> = resp.clientes;
                        // podriamos si lo necesitáramos transformar la resp
                        return clientes;
                      })
                    )
  }

  
  searchClientes(term: string) {
    return this.http.get(`${this.url}search/${term}`)
                  .pipe(
                    map((resp: any) => {
                      // podriamos si lo necesitáramos transformar la resp
                      return resp;
                    })
                  )
  }

  crearCliente(cliente: Cliente) {
    return this.http.post(this.url, cliente)
                    .pipe(
                      map((resp: any) => {
                        // podriamos si lo necesitáramos transformar la resp
                        return resp;
                      })
                    )
  }

  getClienteBy_id(_id) {
    return this.http.get(`${this.url}${_id}`)
                    .pipe(
                      map((resp: any) => {
                        // podriamos si lo necesitáramos transformar la resp
                        return resp;
                      })
                    )
  }

  updateClienteBy_id(_id, cliente: Cliente) {
    return this.http.put(`${this.url}${_id}`, cliente)
                    .pipe(
                      map((resp: any) => {
                        // podriamos si lo necesitáramos transformar la resp
                        return resp;
                      })
                    )
  }

}
