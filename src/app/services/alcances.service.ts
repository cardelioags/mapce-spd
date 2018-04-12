import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };

@Injectable()
export class AlcancesService {
    private url = 'http://localhost:3000/api';
    constructor(
        private _http: HttpClient
    ) {}

    getAlcances() {
        return this._http.get(this.url + '/alcances');
    }
    guardarAlcance(data) {
        return this._http.put(this.url + '/alcances', data, { headers: {'content-type': 'application/json'}});
    }

}
