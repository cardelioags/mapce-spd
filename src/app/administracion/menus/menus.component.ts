import { Component, OnInit } from '@angular/core';
import { MenusService } from '../../services/menus.service';
import { MatDialog } from '@angular/material';
import { ModalNuevoMenuComponent } from './modales/modal-nuevo-menu/modal-nuevo-menu.component';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {

  public menus;

  constructor(
    private _menus: MenusService,
    public _dialog: MatDialog
  ) { }

  ngOnInit() {
    this._menus.navMenu.subscribe(
      (menus: any) => {
        this.menus = menus;
        console.log(menus);
      }
    );
  }
  openDialogNuevo(obj, titulo): void {
    const dialogRef = this._dialog.open(ModalNuevoMenuComponent, {
      width: '100%',
      maxWidth: '600px',
      data: {obj: obj, titulo: titulo  }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
