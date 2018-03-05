import { Injectable } from '@angular/core';

@Injectable()
export class TablasdbService {
    private tablas = {
        personas: {
            title: 'Personas',
            schema: {},
        },
        alcances: {
            title: 'Alcances',
            schema: {},
        },
        opciones: {
            title: 'Opciones',
            schema: {},
        },
        plazas: {
            title: 'Plazas',
            schema: {},
        },
        ccts: {
            title: 'CCTs',
            schema: {},
        }
    };

    getTables() {
        return this.tablas;
    }
}
