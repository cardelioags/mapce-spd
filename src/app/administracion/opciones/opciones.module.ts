import { NgModule } from '@angular/core';
import { OpcionesComponent } from './opciones.component';
import { SharedModule } from '../../shared/shared.module';
import { ModalesNuevoComponent } from './modales/modales.nuevo.component';

@NgModule({
    declarations: [
        OpcionesComponent,
        ModalesNuevoComponent
    ],
    imports: [SharedModule],
    exports: [
        OpcionesComponent,
        ModalesNuevoComponent
    ],
    providers: [],
    entryComponents: [ModalesNuevoComponent]
})
export class OpcionesModule {}
