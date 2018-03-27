import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MenusService } from '../../../../services/menus.service';

@Component({
  selector: 'app-modal-nuevo-menu',
  templateUrl: './modal-nuevo-menu.component.html',
  styleUrls: ['./modal-nuevo-menu.component.css']
})
export class ModalNuevoMenuComponent implements OnInit {
  public menu = {
    title: '',
    icon: '',
    description: '',
    link: '',
    cve: '',
    subs: []
  };
  constructor(
    public dialogRef: MatDialogRef<ModalNuevoMenuComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _menu: MenusService
  ) { }

    guardar() {
      this.dialogRef.close(this.menu);
    }
    cerrar() {
      this.dialogRef.close(false);
    }

  ngOnInit() {
  }

}
