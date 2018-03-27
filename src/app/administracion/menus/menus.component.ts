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
  openDialogNuevo(titulo, principal, idxm?, idxs?): void {
    console.log('Indices: ' + idxm + ', ' + idxs);
    const dialogRef = this._dialog.open(ModalNuevoMenuComponent, {
      width: '100%',
      maxWidth: '600px',
      data: { titulo: titulo }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (principal && result) {
        this.menus.push(result);
        this._menus.putMenu(result).subscribe(
          res => {
            console.log(res);
          }
        );
      }
      if (!principal && result) {
        if (idxs === undefined) {
          this.menus[idxm].subs.push(result);
        } else {
          console.log(this.menus[idxm].subs[idxs]);
          this.menus[idxm].subs[idxs].subs.push(result);
        }
        this._menus.putMenu(this.menus[idxm]).subscribe(
          res => {
            console.log(res);
          }
        );
      }
    });
  }

}
