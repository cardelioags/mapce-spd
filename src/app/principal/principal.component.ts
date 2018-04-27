import { Component, AfterViewInit } from '@angular/core';
import { TdMediaService } from '@covalent/core';
import { MenusService } from './../services/menus.service';
import { LoginService } from '../services/login.service';

declare const gapi: any;

@Component({
  selector: 'app-principal',
  styleUrls: ['./principal.component.css'],
  templateUrl: './principal.component.html',
  animations: [],
})
export class PrincipalComponent implements AfterViewInit {
  public suma = 0;
  public navMenu;
  public usuario_inst: any = {};
  public auth2: any;
  public googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '851437264401-e9hq0rhc6tb5eg7eqn4933f22bh89m86.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignin(document.getElementById('googleBtn'));
    });
  }
  public attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {
        const profile = googleUser.getBasicProfile();
        this.usuario_inst.token = googleUser.getAuthResponse().id_token;
        this.usuario_inst.id = profile.getId();
        this.usuario_inst.nombre = profile.getName();
        this.usuario_inst.imagen = profile.getImageUrl();
        this.usuario_inst.email = profile.getEmail();
        console.log(this.usuario_inst);
        this.login(this.usuario_inst);
      }, (error) => {
        console.log(JSON.stringify(error, undefined, 2));
      });
  }

  constructor(
    public media: TdMediaService,
    public _menusService: MenusService,
    private _login: LoginService
  ) {
    // this.navMenu = this._menusService.navMenu;
  }

  ngAfterViewInit(): void {
    this.googleInit();
  }
  login(usuario_inst) {
    this._login.googleInit(usuario_inst);
  }
}
