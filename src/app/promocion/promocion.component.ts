import { Component, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from '@covalent/core';
import { MenusService } from './../services/menus.service';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-promocion',
  styleUrls: ['./promocion.component.css'],
  templateUrl: './promocion.component.html',
  animations: [],
})
export class PromocionComponent implements AfterViewInit {
  navMenu = [];
  submenuNav = [
    {
      icon: 'arrow_back',
      title: 'Promoción',
      description: 'Panel principal de Promoción'
    },
    {
      icon: 'people',
      title: 'Proceso de Selección',
      description: 'Administrar el registro de personal'
    },
    {
      icon: 'face',
      title: 'Personal Evaluado',
      description: 'Administración de Cuentas de Usuarios'
    },
    {
      icon: 'verified_user',
      title: 'Incidencias',
      description: 'Administración de roles'
    },
    {
      icon: 'done_all',
      title: 'Material de Apoyo',
      description: 'Administra las opciones de menus y aplicación'
    },
    {
      icon: 'view_list',
      title: 'Normateca',
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
