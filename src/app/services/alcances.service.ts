import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };

@Injectable()
export class AlcancesService {
    private url = environment.api;
    constructor(
        private _http: HttpClient
    ) {}

    getAlcances() {
        return this._http.get(this.url + 'alcances');
    }
    guardarAlcance(data) {
        return this._http.post(this.url + 'alcances', data, { headers: {'content-type': 'application/json'}});
    }

}
