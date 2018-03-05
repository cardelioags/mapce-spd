import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class OpcionesService {
    constructor (
        private _http: HttpClient
    ) {}

    private apiUrl = 'http://localhost:3000';

    get(dato) {
        if (dato) {
            return this._http.get(this.apiUrl + '/api/opciones');
        } else {
            return this._http.get(this.apiUrl +  `/api/opciones/${dato}`);         }
    }
    post(dato) {
        return this._http.post(this.apiUrl, dato, {headers: {'content-type': 'application/json'}});
    }
    del() {}

    put() {}
    getSchema() {
        return this._http.get(this.apiUrl + '/api/opciones/model');
    }
}
