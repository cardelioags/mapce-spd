import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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
  };
  constructor(
    public dialogRef: MatDialogRef<ModalNuevoMenuComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit() {
  }

}
