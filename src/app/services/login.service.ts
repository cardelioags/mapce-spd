import { Injectable } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/observable/of';

@Injectable()
export class LoginService {
    constructor( private _usuarios: UsuariosService) {  }
    public googleInit(data) {
        if (data.token && data.email) {
            this._usuarios.getUsuarios(data.email).subscribe(
                res => {
                    console.log( res );
                }
            );
        } else {
            console.log('Acceso no valido!!');
        }
    }
}
