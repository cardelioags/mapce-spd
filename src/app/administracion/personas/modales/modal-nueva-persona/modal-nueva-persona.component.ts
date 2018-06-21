import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal-nueva-persona',
  templateUrl: './modal-nueva-persona.component.html',
  styleUrls: ['./modal-nueva-persona.component.css']
})
export class ModalNuevaPersonaComponent implements OnInit {

  constructor(
    public _dialogRef: MatDialogRef<ModalNuevaPersonaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }
  cerrar() {
    this._dialogRef.close();
  }
}
