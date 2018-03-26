import { Component, OnInit } from '@angular/core';
import { MenusService } from '../../services/menus.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {

  public menus;

  constructor(private _menus: MenusService) { }

  ngOnInit() {
    this._menus.navMenu.subscribe(
      (menus: any) => {
        this.menus = this._menus.getMenu();
      }
    );
  }

}
