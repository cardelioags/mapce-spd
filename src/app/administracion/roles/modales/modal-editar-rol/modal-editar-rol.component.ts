import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MenusService } from '../../../../services/menus.service';
import { RolesService } from '../../../../services/roles.service';

@Component({
  selector: 'app-modal-editar-rol',
  templateUrl: './modal-editar-rol.component.html',
  styleUrls: ['./modal-editar-rol.component.css']
})
export class ModalEditarRolComponent implements OnInit {

  public rol: any;
  public menus: any;

  constructor(
    public dialogRef: MatDialogRef<ModalEditarRolComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _menus: MenusService,
    private _roles: RolesService
  ) {}

  ngOnInit() {
    this.rol = this.data;
    this.menus = this.rol.menus;
  }
  changeCheck(e, idxm, idxs?, idxo?) {
    if (idxs === undefined) {
      this.menus[idxm].perm = e.checked;
    } else {
      if (idxo === undefined) {
        this.menus[idxm].subs[idxs].perm = e.checked;
        this.menus[idxm].perm = this.menus[idxm].subs.some(sub => {
          return sub.perm === true;
        });
      } else {
        this.menus[idxm].subs[idxs].subs[idxo].perm = e.checked;
        this.menus[idxm].perm = this.menus[idxm].subs[idxs].perm = this.menus[idxm].subs[idxs].subs.some(sub => {
          return sub.perm === true;
        });
        if (!this.menus[idxm].subs[idxs].perm) {
          this.menus[idxm].perm = this.menus[idxm].subs.some(sub => {
            return sub.perm === true;
          });
        }
      }
    }
  }
  guardar() {
    alert('guardar');
    this.rol.menus = this.menus;
    this._roles.editar(this.rol).subscribe(
      res => {
        console.log(res);
      }
    );
  }

}
