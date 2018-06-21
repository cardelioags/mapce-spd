import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal-editar-persona',
  templateUrl: './modal-editar-persona.component.html',
  styleUrls: ['./modal-editar-persona.component.css']
})
export class ModalEditarPersonaComponent implements OnInit {

  constructor(
    public _dialogRef: MatDialogRef<ModalEditarPersonaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }
  cerrar() {
    this._dialogRef.close();
  }
}
