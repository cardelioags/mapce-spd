import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { IngresoComponent } from './ingreso.component';
import { MainIngresoComponent } from './main-ingreso/main-ingreso.component';
import { PrelacionesIngresoComponent } from './prelaciones-ingreso/prelaciones-ingreso.component';
import { AsignacionesComponent } from './asignaciones/asignaciones.component';

@NgModule({
    declarations: [
        MainIngresoComponent,
        PrelacionesIngresoComponent,
        AsignacionesComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [],
    providers: [],
})
export class IngresoModule {}
