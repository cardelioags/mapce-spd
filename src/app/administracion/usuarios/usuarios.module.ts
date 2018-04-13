import { NgModule } from '@angular/core';
import { UsuariosComponent } from './usuarios.component';
import { ModalNuevoUsuarioComponent } from './modales/modal-nuevo-usuario/modal-nuevo-usuario.component';
import { SharedModule } from '../../shared/shared.module';
import { AlcancesService } from '../../services/alcances.service';
import { RolesService } from '../../services/roles.service';
import { UsuariosService } from '../../services/usuarios.service';

@NgModule({
    declarations: [
        UsuariosComponent,
        ModalNuevoUsuarioComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        UsuariosComponent,
    ],
    providers: [
        AlcancesService,
        RolesService,
        UsuariosService
    ],
    entryComponents: [ModalNuevoUsuarioComponent]
})
export class UsuariosModule {}
