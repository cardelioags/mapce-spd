import { Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modales-nuevo',
  templateUrl: './modales.nuevo.component.html',
  styles: [`
    mat-form-field {
      width: 100%
    }
  `]
})
export class ModalesNuevoComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalesNuevoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

}
