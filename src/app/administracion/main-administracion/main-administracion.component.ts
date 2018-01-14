import { Component, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from '@covalent/core';
import { MenusService } from "../../../services/menus.service";
import { MenuPositionX } from '@angular/material/menu/typings/menu-positions';

@Component({
  selector: 'app-main-administracion',
  templateUrl: './main-administracion.component.html',
  styleUrls: ['./main-administracion.component.css'],
})
export class MainAdministracionComponent implements AfterViewInit {

  adminMenu = [];

  constructor(private _changeDetectorRef: ChangeDetectorRef,
    private _menu : MenusService,
    public media: TdMediaService) { }
    
    ngAfterViewInit(): void {
      this.media.broadcast();
      this.adminMenu = this._menu.getAdminMenu();
    }
}
