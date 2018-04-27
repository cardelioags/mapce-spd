import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class UsuariosService {
    private url = environment.api;

    constructor(private _http: HttpClient) {
    }
    getUsuarios(data?) {
        if (data) {
            if (data.split('@')[1] === 'iea.edu.mx') {
                return this._http.get(this.url + 'usuarios/email/' + data);
            } else {
                return Observable.of({ resp: false, msg: 'La cuenta no pertece al dominio iea.edu.mx' });
            }
        } else {
            return this._http.get(this.url + 'usuarios');
        }
    }
    guardaUsuario(data) {
        return this._http.post(this.url + 'usuarios', data, {headers: {'content-type': 'application/json'}});
    }
}
