import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ModalNuevoAlcanceComponent } from './modales/modal-nuevo-alcance/modal-nuevo-alcance.component';
import { ModalEditarAlcanceComponent } from './modales/modal-editar-alcance/modal-editar-alcance.component';
import { AlcancesComponent } from './alcances.component';

@NgModule({
    declarations: [
        ModalEditarAlcanceComponent,
        ModalNuevoAlcanceComponent,
        AlcancesComponent
    ],
    imports: [ SharedModule ],
    exports: [ AlcancesComponent ],
    providers: [],
    entryComponents: [ModalEditarAlcanceComponent, ModalNuevoAlcanceComponent]
})
export class AlcancesModule {}
