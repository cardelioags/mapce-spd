import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MenusService } from '../../../../services/menus.service';

@Component({
  selector: 'app-modal-nuevo-rol',
  templateUrl: './modal-nuevo-rol.component.html',
  styleUrls: ['./modal-nuevo-rol.component.css']
})
export class ModalNuevoRolComponent implements OnInit {
  public menuval = [];
  public menus: any;
  constructor(
    public dialogRef: MatDialogRef<ModalNuevoRolComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _menus: MenusService
  ) {}

  ngOnInit() {
    this._menus.navMenu.subscribe(menus => {
      this.menus = menus;
    });
  }
  changeCheck(e, idxm, idxs?, idxo?) {
    if (idxs === undefined) {
      this.menus[idxm].perm = e.checked;
    } else {
      if (idxo === undefined) {
        this.menus[idxm].subs[idxs].perm = e.checked;
        this.menus[idxm].perm = this.menus[idxm].subs.find(sub => {
          return sub.perm === true;
        });
      } else {
        this.menus[idxm].subs[idxs].subs[idxo].perm = e.checked;
        this.menus[idxm].perm = this.menus[idxm].subs[idxs].perm = this.menus[
          idxm
        ].subs[idxs].subs.find(sub => {
          return sub.perm === true;
        });
        if (!this.menus[idxm].subs[idxs].perm) {
          this.menus[idxm].perm = this.menus[idxm].subs.find(sub => {
            return sub.perm === true;
          });
        }
      }
    }
  }
}
