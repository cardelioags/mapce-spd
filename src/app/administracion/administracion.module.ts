import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MainAdministracionComponent } from './main-administracion/main-administracion.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RolesModule } from './roles/roles.module';
import { PersonasModule } from './personas/personas.module';
import { OpcionesModule } from './opciones/opciones.module';
import { ImportadorModule } from './importador/importador.module';
import { CctsComponent } from './ccts/ccts.component';
import { NominaComponent } from './nomina/nomina.component';
import { MenusComponent } from './menus/menus.component';
import { ModalNuevoMenuComponent } from './menus/modales/modal-nuevo-menu/modal-nuevo-menu.component';
import { AlcancesModule } from './alcances/alcances.module';

@NgModule({
    declarations: [
        MainAdministracionComponent,
        CctsComponent,
        NominaComponent,
        MenusComponent,
        ModalNuevoMenuComponent,
    ],
    imports: [
        SharedModule,
        UsuariosModule,
        RolesModule,
        PersonasModule,
        OpcionesModule,
        ImportadorModule,
        AlcancesModule
    ],
    exports: [],
    providers: [],
    entryComponents: [ModalNuevoMenuComponent]
})
export class AdministracionModule {}
