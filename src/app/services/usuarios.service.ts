import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsuariosService {
    private url = '';

    constructor(private _http: HttpClient) {
    }
    getUsuarios() {
        return this._http.get(this.url);
    }
}
