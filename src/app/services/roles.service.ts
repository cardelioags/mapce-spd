import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class RolesService {
    private url = environment.api;
    constructor(
        private _http: HttpClient,
    ) { }
    getRoles() {
        return this._http.get(this.url + 'roles');
    }
    nuevo(rol) {
        return this._http.post(this.url + 'roles', rol, {headers: {'content-type': 'application/json'}});
    }
    editar(rol) {
        return this._http.put(this.url + 'roles', rol, {headers: {'content-type': 'application/json'}});
    }
}
