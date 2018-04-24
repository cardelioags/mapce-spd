import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class OpcionesService {
    constructor (
        private _http: HttpClient
    ) {}

    private apiUrl = environment.api;

    get(dato) {
        if (dato) {
            return this._http.get(this.apiUrl + 'opciones');
        } else {
            return this._http.get(this.apiUrl +  `opciones/${dato}`);         }
    }
    post(dato) {
        return this._http.post(this.apiUrl, dato, {headers: {'content-type': 'application/json'}});
    }
    del() {}

    put() {}
    getSchema() {
        return this._http.get(this.apiUrl + 'opciones/model');
    }
}
