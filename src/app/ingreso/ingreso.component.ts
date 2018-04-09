import { Component, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from '@covalent/core';
import { MenusService } from './../services/menus.service';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-ingreso',
  styleUrls: ['./ingreso.component.css'],
  templateUrl: './ingreso.component.html',
  animations: [],
})
export class IngresoComponent implements AfterViewInit {
  public navMenu;
  public subMenuNav;

  constructor(private _changeDetectorRef: ChangeDetectorRef,
    public media: TdMediaService,
    public _menu: MenusService
  ) {
      this.navMenu = this._menu.getMenu();
      this._menu.getSubmenu('5ab86abb0f6e821dee8d4690');
    }

  ngAfterViewInit(): void {
    this.subMenuNav = this._menu.subs;
  }
}
