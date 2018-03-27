import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RolesService {
    private url = 'http://localhost:3000/api';
    constructor(
        private _http: HttpClient,
    ) { }
    getRoles() {
        return this._http.get(this.url + '/roles');
    }
}
