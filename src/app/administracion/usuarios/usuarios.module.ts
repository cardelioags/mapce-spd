import { NgModule } from '@angular/core';
import { UsuariosComponent } from './usuarios.component';
import { ModalNuevoUsuarioComponent } from './modales/modal-nuevo-usuario/modal-nuevo-usuario.component';
import { SharedModule } from '../../shared/shared.module';

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
    providers: [],
    entryComponents: [ModalNuevoUsuarioComponent]
})
export class UsuariosModule {}
