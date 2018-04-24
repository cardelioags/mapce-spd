import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


@Injectable()
export class NominaService {

    private url = environment.api;

    constructor(
        private _http: HttpClient
    ) {}
    get() {
        return this._http.get(this.url + 'nomina');
    }
    getSchema() {
        return this._http.get(this.url + 'nomina/model');
    }
}
