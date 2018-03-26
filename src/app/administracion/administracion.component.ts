import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { TdMediaService } from '@covalent/core';
import { MenusService } from '../services/menus.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-administracion',
  styleUrls: ['./administracion.component.css'],
  templateUrl: './administracion.component.html',
  animations: []
})
export class AdministracionComponent implements OnInit {
  public navMenu;
  public subMenuNav;
  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    public media: TdMediaService,
    public _menu: MenusService
  ) {
    this.navMenu = this._menu.navMenu;
    this._menu.getSubmenu('5ab86abb0f6e821dee8d4695');
  }
  ngOnInit(): void {
    this.subMenuNav = this._menu.subs;
    // broadcast to all listener observables when loading the page
    setTimeout(() => {
      // workaround since MatSidenav has issues redrawing at the beggining
      this.media.broadcast();
      // this._changeDetectorRef.detectChanges();
    });
  }
}
