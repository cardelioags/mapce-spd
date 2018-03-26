import { Component, OnInit } from '@angular/core';
import { MenusService } from '../services/menus.service';

@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.html',
})
export class MainMenuComponent implements OnInit {
    constructor(private _menu: MenusService) { }
    public navMenu;
    ngOnInit() {
        this.navMenu = this._menu.navMenu;
    }
}
