import { Component, OnInit } from '@angular/core';
import { AlcancesService } from '../../../../services/alcances.service';
import { AlcancesComponent } from '../../alcances.component';

@Component({
  selector: 'app-modal-nuevo-alcance',
  templateUrl: './modal-nuevo-alcance.component.html',
  styleUrls: ['./modal-nuevo-alcance.component.css']
})
export class ModalNuevoAlcanceComponent implements OnInit {

  public alcance = {};

  constructor(
    private _alcances: AlcancesService
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
