import { Component, AfterViewInit} from '@angular/core';
import { TdMediaService } from '@covalent/core';
import { MenusService } from '../../services/menus.service';
import { MenuPositionX } from '@angular/material/menu/typings/menu-positions';

@Component({
  selector: 'app-main-administracion',
  templateUrl: './main-administracion.component.html',
  styleUrls: ['./main-administracion.component.css'],
})
export class MainAdministracionComponent implements AfterViewInit {

  adminMenu;

  constructor(
    private _menu: MenusService,
    public media: TdMediaService) {
      this.adminMenu = this._menu.subs;
    }
    ngAfterViewInit(): void {
      this.media.broadcast();
    }
}
