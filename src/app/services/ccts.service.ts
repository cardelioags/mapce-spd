import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


@Injectable()
export class CctsService {

    private url = 'http://localhost:3000/api/ccts';

    constructor(
        private _http: HttpClient
    ) {}
    get() {
        return this._http.get(this.url);
    }
    getSchema() {
        return this._http.get(this.url + '/model');
    }
}
