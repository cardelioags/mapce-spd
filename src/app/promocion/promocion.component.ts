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
  navMenu;
  subMenuNav;

  constructor(
    public media: TdMediaService,
    public _menu: MenusService
  ) {
      this.navMenu = this._menu.getMenu();
      this._menu.getSubmenu('5ab86abb0f6e821dee8d4691');
    }

  ngAfterViewInit(): void {
    this.subMenuNav = this._menu.subs;
  }
}
