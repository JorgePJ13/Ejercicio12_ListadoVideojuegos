import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LoginValidacionServicio {
    readonly endPoint = 'http://localhost:8080/Ejercicio21_WebLogin/usuarios/login';

    constructor(private _httpClient : HttpClient) {

    }

    public login(user : String, password : String) : Observable<any>{
        return this._httpClient.get<any>(`${this.endPoint}?nombre=${user}&password=${password}`) .pipe(catchError(this.manejarError));
      }

      public loginPost(user : String, password : String) : Observable<any>{
        const headers= new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*');
  
        let jsonUser = { usuario: user ,contraseña: password};
  
        return this._httpClient.post<any>(`${this.endPoint}`, jsonUser,{ 'headers': headers }) .pipe(catchError(this.manejarError));
      
      }

    private manejarError(msgError: HttpErrorResponse) {
        let mensajeError = ''
        if (msgError.error instanceof ErrorEvent) {
            mensajeError = 'Ocurrió un error:' + msgError.error
        } else {
            mensajeError = `El servicio Rest retorno: Status: ${msgError.status}, ` + `Body: ${msgError.error}`
        }
        console.error(mensajeError)
        return throwError(() => new Error(mensajeError));
    }
}