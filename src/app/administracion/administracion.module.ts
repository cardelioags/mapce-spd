import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AlcancesComponent } from '../administracion/alcances/alcances.component';
import { MainAdministracionComponent } from './main-administracion/main-administracion.component';
import { OpcionesComponent } from './opciones/opciones.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RolesModule } from './roles/roles.module';
import { PersonasModule } from './personas/personas.module';

@NgModule({
    declarations: [
        AlcancesComponent,
        MainAdministracionComponent,
        OpcionesComponent,
    ],
    imports: [
        SharedModule,
        UsuariosModule,
        RolesModule,
        PersonasModule
    ],
    exports: [
        AlcancesComponent,
        MainAdministracionComponent,
        OpcionesComponent,
        UsuariosModule,
        PersonasModule,
        RolesModule
    ],
    providers: [],
})
export class AdministracionModule {}
