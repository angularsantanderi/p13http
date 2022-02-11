import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const faketoken: string = localStorage.getItem('faketoken');

    let request = req;

    if (faketoken) {
      request = req.clone({
        setHeaders: {
          authorization: faketoken
        }
      })
    }

    return next.handle(request)
               .pipe(
                 catchError((err: HttpErrorResponse) => {
                    if(err.status === 401) {
                      this.router.navigate(['/fake-login']);
                    }
                    return throwError( () => err);
                 })
               )

  }

}
