import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PersonasService } from '../../../../services/personas.service';
import { AlcancesService } from '../../../../services/alcances.service';
import { RolesService } from '../../../../services/roles.service';
import { UsuariosService } from '../../../../services/usuarios.service';

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

  public usuario = {
    persona: '',
    permisos: []
  };

  personaSelected: any;
  public campoSelected = '';
  public menuval;
  public personal;
  public alcances;
  public alcance;
  public rol;
  public roles = [];
  public asignaciones = [];
  constructor(
    public dialogRef: MatDialogRef<ModalNuevoUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _personal: PersonasService,
    private _usuarios: UsuariosService,
    private _alcances: AlcancesService,
    private _roles: RolesService
  ) { }

  ngOnInit() {
    this._roles.getRoles().subscribe(
      (res: any) => { this.roles = res; }
    );
    this._alcances.getAlcances().subscribe(
      ( res: any) => { this.alcances = res; }
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
        rol: {},
        alcance: {}
      }
    );
  }
  guardar() {
    this.usuario.persona = this.personaSelected._id;
    this.usuario.permisos.push( {alcance: this.alcance._id, rol: this.rol._id} );
    console.log( this.usuario );
    this._usuarios.guardaUsuario(this.usuario).subscribe(
      (resp) => {
        console.log(resp);
      }
    );
  }
}
