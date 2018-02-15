import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AlcancesComponent } from '../administracion/alcances/alcances.component';
import { MainAdministracionComponent } from './main-administracion/main-administracion.component';
import { OpcionesComponent } from './opciones/opciones.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RolesModule } from './roles/roles.module';
import { PersonasModule } from './personas/personas.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { BuscarUsuarioComponent } from './usuarios/tabs/buscar-usuario/buscar-usuario.component';
import { EditarUsuarioComponent } from './usuarios/tabs/editar-usuario/editar-usuario.component';
import { LayoutUsuarioComponent } from './usuarios/tabs/layout-usuario/layout-usuario.component';
import { NuevaUsuarioComponent } from './usuarios/tabs/nueva-usuario/nueva-usuario.component';
import { PersonasComponent } from './personas/personas.component';
import { RolesComponent } from './roles/roles.component';


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
        PersonasModule,
        UsuariosModule
    ],
    exports: [
        AlcancesComponent,
        MainAdministracionComponent,
        OpcionesComponent,
    ],
    providers: [],
})
export class AdministracionModule {}
