import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PersonasService } from '../../../../services/personas.service';

@Component({
  selector: 'app-modal-nuevo-usuario',
  templateUrl: './modal-nuevo-usuario.component.html',
  styleUrls: ['./modal-nuevo-usuario.component.css']
})
export class ModalNuevoUsuarioComponent implements OnInit {
  public menuval = [];
  public personas: any;
  constructor(
    public dialogRef: MatDialogRef<ModalNuevoUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _personal: PersonasService
  ) {}

  ngOnInit() {
    this._personal.getPersona().subscribe(personas => {
      this.personas = personas;
    });
  }
  changeCheck(e, idxm, idxs?, idxo?) {
    if (idxs === undefined) {
      this.personas[idxm].perm = e.checked;
    } else {
      if (idxo === undefined) {
        this.personas[idxm].subs[idxs].perm = e.checked;
        this.personas[idxm].perm = this.personas[idxm].subs.find(sub => {
          return sub.perm === true;
        });
      } else {
        this.personas[idxm].subs[idxs].subs[idxo].perm = e.checked;
        this.personas[idxm].perm = this.personas[idxm].subs[idxs].perm = this.personas[
          idxm
        ].subs[idxs].subs.find(sub => {
          return sub.perm === true;
        });
        if (!this.personas[idxm].subs[idxs].perm) {
          this.personas[idxm].perm = this.personas[idxm].subs.find(sub => {
            return sub.perm === true;
          });
        }
      }
    }
  }
}
