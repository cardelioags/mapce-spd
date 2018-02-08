import { Injectable } from '@angular/core';

declare const gapi: any

@Injectable()
export class LoginService {
    public auth2: any;
    public googleInit(){
        gapi.load('auth2', ()=>{
            this.auth2 = gapi.auth2.init({
                client_id: "El id cliente para auth",
                cookiepolicy: 'single_host_origin',
                scope: 'profile email'
            })
        })
    }
}