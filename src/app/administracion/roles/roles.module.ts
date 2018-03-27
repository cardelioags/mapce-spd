import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { RolesComponent } from './roles.component';
import { ModalNuevoRolComponent } from './modales/modal-nuevo-rol/modal-nuevo-rol.component';

@NgModule({
    declarations: [
        RolesComponent,
        ModalNuevoRolComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [
        RolesComponent
    ],
    providers: [],
    entryComponents: [ModalNuevoRolComponent]
})
export class RolesModule {}
