import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { catchError } from "rxjs/operators";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class PersonasService {
    constructor(private _http: HttpClient) { }

    private url = "http://localhost:3000"
    carga(dato): Observable <any> {
        return this._http.post(`${this.url}/api/personas/carga`, dato, httpOptions);
    }
}