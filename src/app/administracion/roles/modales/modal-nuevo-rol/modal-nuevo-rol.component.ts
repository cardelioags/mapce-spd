import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MenusService } from '../../../../services/menus.service';

@Component({
  selector: 'app-modal-nuevo-rol',
  templateUrl: './modal-nuevo-rol.component.html',
  styleUrls: ['./modal-nuevo-rol.component.css']
})
export class ModalNuevoRolComponent implements OnInit {

  public menus: any;
  constructor(
    public dialogRef: MatDialogRef <ModalNuevoRolComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _menus: MenusService
  ) {  }


  ngOnInit() {
    this._menus.navMenu.subscribe(
      menus => {
        this.menus = menus;
      }
    );
  }

}
