import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OpcionesService } from './opciones.service';
import { CctsService } from './ccts.service';
import { PersonasService } from './personas.service';
import { NominaService } from './nomina.service';
import { environment } from '../../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };



@Injectable()
export class TablasdbService {
    private urlApi = environment.api;
    private tablas = [
        {
            title: 'Personas',
            api: 'personas',
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
            api: 'ccts',
            schema: [],
        }, {
            title: 'Reporte de Nómina',
            api: 'nomina',
            schema: [],
        }
    ];

    constructor(
        private _http: HttpClient,
        private _personas: PersonasService,
        private _opciones: OpcionesService,
        private _ccts: CctsService,
        private _nomina: NominaService
    ) {
        this._personas.getSchema().subscribe(res => {
            this.tablas[0].schema = Object.keys(res);
        });
        this._opciones.getSchema().subscribe(res => {
            this.tablas[2].schema = Object.keys(res);
        });
        this._ccts.getSchema().subscribe(res => {
            this.tablas[4].schema = Object.keys(res);
        });
        this._nomina.getSchema().subscribe(res => {
            this.tablas[5].schema = Object.keys(res);
        });
    }

    getTables() {
        return this.tablas;
    }
    importData(tabla, data, id) {
        id = id.split(' ')[0];
        const conf = {
            data: data,
            id: id
        };
        return this._http.put(`${this.urlApi}${tabla}/importar`, conf, httpOptions);
    }
}
