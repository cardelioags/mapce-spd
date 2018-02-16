import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class OpcionesService {
    constructor (
        private _http: HttpClient
    ) {}

    private apiUrl = '/api/opciones/';

    get(dato) {
        if (dato) {
            return this._http.get(this.apiUrl);
        } else {
            return this._http.get(this.apiUrl +  `/${dato}`);         }
    }
    post(dato) {
        return this._http.post(this.apiUrl, dato, {headers: {'content-type': 'application/json'}});
    }
    del() {}

    put() {}
}
