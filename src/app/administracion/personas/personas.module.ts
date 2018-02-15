import { NgModule } from '@angular/core';
import { BuscarPersonaComponent } from './tabs/buscar-persona/buscar-persona.component';
import { EditarPersonaComponent } from './tabs/editar-persona/editar-persona.component';
import { LayoutPersonaComponent } from './tabs/layout-persona/layout-persona.component';
import { NuevaPersonaComponent } from './tabs/nueva-persona/nueva-persona.component';
import { PersonasComponent } from './personas.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [
        BuscarPersonaComponent,
        EditarPersonaComponent,
        LayoutPersonaComponent,
        NuevaPersonaComponent,
        PersonasComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        BuscarPersonaComponent,
        EditarPersonaComponent,
        LayoutPersonaComponent,
        NuevaPersonaComponent,
        PersonasComponent
    ],
    providers: [],
})
export class PersonasModule {}
