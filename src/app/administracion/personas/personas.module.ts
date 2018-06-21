import { NgModule } from '@angular/core';
import { PersonasComponent } from './personas.component';
import { SharedModule } from '../../shared/shared.module';
import { ModalNuevaPersonaComponent } from './modales/modal-nueva-persona/modal-nueva-persona.component';
import { ModalEditarPersonaComponent } from './modales/modal-editar-persona/modal-editar-persona.component';

@NgModule({
    declarations: [
        PersonasComponent,
        ModalNuevaPersonaComponent,
        ModalEditarPersonaComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        PersonasComponent
    ],
    providers: [],
    entryComponents: [
        ModalEditarPersonaComponent,
        ModalNuevaPersonaComponent
    ]
})
export class PersonasModule {}
