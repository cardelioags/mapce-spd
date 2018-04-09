import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { RolesComponent } from './roles.component';
import { ModalNuevoRolComponent } from './modales/modal-nuevo-rol/modal-nuevo-rol.component';
import { ModalEditarRolComponent } from './modales/modal-editar-rol/modal-editar-rol.component';

@NgModule({
    declarations: [
        RolesComponent,
        ModalNuevoRolComponent,
        ModalEditarRolComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [
        RolesComponent
    ],
    providers: [],
    entryComponents: [ModalNuevoRolComponent, ModalEditarRolComponent]
})
export class RolesModule {}
