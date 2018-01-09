import { Component, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from '@covalent/core';
import { MenusService } from '../../services/menus.service'

@Component({
  //changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-administracion',
  styleUrls: ['./administracion.component.css'],
  templateUrl: './administracion.component.html',
  animations: [],
})
export class AdministracionComponent implements AfterViewInit {

  navMenu = [];
  submenuNav = [
    {
      icon: 'arrow_back',
      title: 'Administración',
      description: 'Panel principal de Administración'
    },
    {
      icon: 'people',
      title: 'Personas',
      description: 'Administrar el registro de personal'
    },
    {
      icon: 'face',
      title: 'Usuarios',
      description: 'Administración de Cuentas de Usuarios'
    },
    {
      icon: 'verified_user',
      title: 'Roles',
      description: 'Administración de roles'
    },
    {
      icon: 'done_all',
      title: 'Opciones',
      description: 'Administra las opciones de menus y aplicación'
    },
    {
      icon: 'view_list',
      title: 'Alcances',
      description: 'Define y administra alcances para los roles'
    },
 
  ];
  constructor(private _changeDetectorRef: ChangeDetectorRef,
              public media: TdMediaService, public _menusService: MenusService) {
                this.navMenu = this._menusService.getMenu();
              }
  
  
  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    setTimeout(() => { // workaround since MatSidenav has issues redrawing at the beggining
      this.media.broadcast();
      this._changeDetectorRef.detectChanges();
    });
  }

}