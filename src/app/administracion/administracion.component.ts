import { Component, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from '@covalent/core';
import { MenusService } from '../services/menus.service';

@Component({
  selector: 'app-administracion',
  styleUrls: ['./administracion.component.css'],
  templateUrl: './administracion.component.html',
  animations: [],
})
export class AdministracionComponent implements AfterViewInit {

  navMenu = [];
  subMenuNav = [];
  constructor(private _changeDetectorRef: ChangeDetectorRef,
              public media: TdMediaService, public _menusService: MenusService) {
                this.navMenu = this._menusService.getMenu();
                this.subMenuNav = this._menusService.getAdminMenu();
              }
  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    setTimeout(() => { // workaround since MatSidenav has issues redrawing at the beggining
      this.media.broadcast();
      this._changeDetectorRef.detectChanges();
    });
  }
}
