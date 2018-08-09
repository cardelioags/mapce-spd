import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MainIngresoComponent } from './main-ingreso/main-ingreso.component';
import { PrelacionesIngresoComponent } from './prelaciones-ingreso/prelaciones-ingreso.component';
import { AsignacionesComponent } from './asignaciones/asignaciones.component';
import { VacanciasComponent } from './vacancias/vacancias.component';

@NgModule({
    declarations: [
        MainIngresoComponent,
        PrelacionesIngresoComponent,
        AsignacionesComponent,
        VacanciasComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [],
    providers: [],
})
export class IngresoModule {}
