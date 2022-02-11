import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

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
                        // podriamos si lo necesitáramos transformar la resp
                        return resp;
                      })
                    )
  }

}
