import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() { }

  postLog(log: any) { // Podríamos implementar una interfaz
    console.log(log);
    // lógica para enviar a API
  }

}
