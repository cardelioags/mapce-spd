import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


@Injectable()
export class CctsService {

    private url = environment.api;

    constructor(
        private _http: HttpClient
    ) {}
    get() {
        return this._http.get(this.url + 'ccts');
    }
    getSchema() {
        return this._http.get(this.url + 'ccts/model');
    }
}
