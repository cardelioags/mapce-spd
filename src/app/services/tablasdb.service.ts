import { Injectable } from '@angular/core';
import { OpcionesService } from './opciones.service';
import { CctsService } from './ccts.service';

@Injectable()
export class TablasdbService {
    private tablas = [
        {
            title: 'Personas',
            schema: [],
        }, {
            title: 'Alcances',
            schema: [],
        }, {
            title: 'Opciones',
            schema: [],
        }, {
            title: 'Plazas',
            schema: [],
        }, {
            title: 'CCTs',
            schema: [],
        }
    ];

    constructor(
        private _opciones: OpcionesService,
        private _ccts: CctsService
    ) {
        this._opciones.getSchema().subscribe(res => {
            this.tablas[2].schema = Object.keys(res);
        });
        this._ccts.getSchema().subscribe(res => {
            this.tablas[4].schema = Object.keys(res);
        });
    }

    getTables() {
        return this.tablas;
    }
}
