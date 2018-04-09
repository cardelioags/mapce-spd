import { Component, OnInit } from '@angular/core';
import { MenusService } from '../../services/menus.service';
import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'app-main-ingreso',
  templateUrl: './main-ingreso.component.html',
  styleUrls: ['./main-ingreso.component.css']
})
export class MainIngresoComponent implements OnInit {

  adminMenu;

  constructor(
    private _menu: MenusService,
    public media: TdMediaService) {
      this.adminMenu = this._menu.subs;
    }
    ngOnInit(): void {
      this.media.broadcast();
    }
}
