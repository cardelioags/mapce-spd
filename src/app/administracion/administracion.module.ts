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
import { NominaComponent } from './nomina/nomina.component';
import { MenusComponent } from './menus/menus.component';

@NgModule({
    declarations: [
        AlcancesComponent,
        MainAdministracionComponent,
        CctsComponent,
        NominaComponent,
        MenusComponent
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
        MenusComponent,
        MainAdministracionComponent,
    ],
    providers: [],
})
export class AdministracionModule {}
