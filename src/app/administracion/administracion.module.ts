import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AlcancesComponent } from '../administracion/alcances/alcances.component';
import { MainAdministracionComponent } from './main-administracion/main-administracion.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RolesModule } from './roles/roles.module';
import { PersonasModule } from './personas/personas.module';
import { OpcionesModule } from './opciones/opciones.module';
import { ImportadorModule } from './importador/importador.module';
import { CctsComponent } from './ccts/ccts.component';

@NgModule({
    declarations: [
        AlcancesComponent,
        MainAdministracionComponent,
        CctsComponent,
    ],
    imports: [
        SharedModule,
        UsuariosModule,
        RolesModule,
        PersonasModule,
        OpcionesModule,
        ImportadorModule
    ],
    exports: [
        AlcancesComponent,
        MainAdministracionComponent,
    ],
    providers: [],
})
export class AdministracionModule {}
