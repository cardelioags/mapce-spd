import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsuariosService {
    private url = 'http://localhost:3000/api/usuarios/';

    constructor(private _http: HttpClient) {
    }
    getUsuarios() {
        return this._http.get(this.url);
    }
    guardaUsuario(data) {
        return this._http.post(this.url, data, {headers: {'content-type': 'application/json'}});
    }
}
