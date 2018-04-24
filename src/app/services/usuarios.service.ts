import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class UsuariosService {
    private url = environment.api;

    constructor(private _http: HttpClient) {
    }
    getUsuarios() {
        return this._http.get(this.url + 'usuarios');
    }
    guardaUsuario(data) {
        return this._http.post(this.url + 'usuarios', data, {headers: {'content-type': 'application/json'}});
    }
}
