import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PersonasService } from '../../../../services/personas.service';
import { AlcancesService } from '../../../../services/alcances.service';
import { RolesService } from '../../../../services/roles.service';

@Component({
  selector: 'app-modal-nuevo-usuario',
  templateUrl: './modal-nuevo-usuario.component.html',
  styleUrls: ['./modal-nuevo-usuario.component.css']
})
export class ModalNuevoUsuarioComponent implements OnInit {
  public campos = [
    { campo: 'CURP', value: 'curp' },
    { campo: 'Nombre', value: 'nombre' }
  ];
  curp = '';
  prim_apell = '';
  nombre = '';
  segu_apell = '';
  personaSelected: any;
  public campoSelected = '';
  public menuval = [];
  public personal = [];
  public alcances = [];
  public roles = [];
  public asignaciones = [];
  constructor(
    public dialogRef: MatDialogRef<ModalNuevoUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _personal: PersonasService,
    private _alcances: AlcancesService,
    private _roles: RolesService
  ) { }

  ngOnInit() {
    this._roles.getRoles().subscribe(
      (res: any) => { this.roles = res; }
    );
    this._alcances.getAlcances().subscribe(
      res => {console.log(res); }
    );

  }
  buscarPersonal() {
    if (this.campoSelected === 'curp') {
      const criterio = {
        curp: {$regex: this.curp, $options: 'i'}
      };
      this._personal.getPersona(criterio).subscribe(personal => {
        this.personal = personal;
      });
    }
    if (this.campoSelected === 'nombre') {
      const criterio = {
        nombre: {$regex: this.nombre, $options: 'i'},
        prim_apell: {$regex: this.prim_apell, $options: 'i'},
        segu_apell: {$regex: this.segu_apell, $options: 'i'}
      };
      this._personal.getPersona(criterio).subscribe(personal => {
          this.personal = personal;
      });
    }
  }
  addAsignacion() {
    this.asignaciones.push(
      {
        rol: '',
        alcance: ''
      }
    );
  }
}
