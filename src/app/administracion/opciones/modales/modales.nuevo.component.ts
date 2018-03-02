import { Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modales-nuevo',
  templateUrl: './modales.nuevo.component.html',
  styles: [`
    mat-form-field {
      width: 100%
    }
  `],
  providers: [  ]
})
export class ModalesNuevoComponent {

  public tipos = [{
    value: 'Menú'
  }, {
    value: 'Submenú'
  }, {
    value: 'Opción'
  }];
  constructor(
    public dialogRef: MatDialogRef<ModalesNuevoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

}
