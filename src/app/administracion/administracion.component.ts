import { Component, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from '@covalent/core';

@Component({
  //changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-administracion',
  styleUrls: ['./administracion.component.css'],
  templateUrl: './administracion.component.html',
  animations: [],
})
export class AdministracionComponent implements AfterViewInit {

 
  navmenu: Object[] = [{
      icon: 'people',
      route: '.',
      title: 'Personas',
      description: 'Administración de Personas Registradas',
    }, {
      icon: 'person',
      route: '.',
      title: 'Usuarios',
      description: 'Administración de Usuarios',
    }, {
      icon: 'verified_user',
      route: '.',
      title: 'Roles',
      description: 'Administración de Roles',
    }, {
      icon: 'offline_pin',
      route: '.',
      title: 'Opciones',
      description: 'Administración de Opciones',
    }, {
      icon: 'input',
      route: '.',
      title: 'Administración de Alcances',
      description: 'Administración de Alcances',
    },
  ];

  constructor(private _changeDetectorRef: ChangeDetectorRef,
              public media: TdMediaService) {}

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    setTimeout(() => { // workaround since MatSidenav has issues redrawing at the beggining
      this.media.broadcast();
      this._changeDetectorRef.detectChanges();
    });
  }

}