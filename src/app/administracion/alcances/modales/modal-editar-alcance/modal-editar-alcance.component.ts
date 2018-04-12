import { Component, OnInit, Inject } from '@angular/core';
import { AlcancesService } from '../../../../services/alcances.service';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal-editar-alcance',
  templateUrl: './modal-editar-alcance.component.html',
  styleUrls: ['./modal-editar-alcance.component.css']
})
export class ModalEditarAlcanceComponent implements OnInit {

  constructor(
    private _alcances: AlcancesService,
    @Inject(MAT_DIALOG_DATA) public alcance: any,
  ) { }

  ngOnInit() {
  }

  guardar() {
    console.log(this.alcance);
    this._alcances.guardarAlcance(this.alcance).subscribe(
      (res) => {
        console.log(res);
      }
    );
  }

}
