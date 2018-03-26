import { Component, OnInit } from '@angular/core';
import { TdMediaService } from '@covalent/core';
import { MenusService } from './services/menus.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
  animations: [],
})
export class AppComponent implements OnInit {

  public navMenu;
  constructor(
    public media: TdMediaService,
    public _menusService: MenusService
  ) {
    this._menusService.getMenu();
  }

  ngOnInit(): void {
    this.navMenu = this._menusService.navMenu;
  }

}
