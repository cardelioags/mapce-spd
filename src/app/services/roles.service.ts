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
    nuevo(rol) {
        return this._http.post(this.url + '/roles', rol, {headers: {'content-type': 'application/json'}});
    }
    editar(rol) {
        return this._http.put(this.url + '/roles', rol, {headers: {'content-type': 'application/json'}});    }
}
