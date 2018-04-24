import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class PersonasService {
    constructor(private _http: HttpClient) { }

    private url = environment.api;

    getPersona(dato?): Observable <any> {
        if (dato) {
            return this._http.post(`${this.url}personas/buscar`, dato, httpOptions);
        } else {
            return this._http.get(`${this.url}personas/`);
        }
    }
    addPersona(dato): Observable <any> {
        return this._http.post(`${this.url}personas/`, dato, httpOptions);
    }
    upsertPersona(dato): Observable <any> {
        return this._http.put(`${this.url}personas/`, dato, httpOptions);
    }
    getSchema(): Observable <any> {
        return this._http.get(`${this.url}personas/model`);
    }
}
