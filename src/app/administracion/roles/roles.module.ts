import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoRolComponent } from './tabs/nuevo-rol/nuevo-rol.component';
import { SharedModule } from '../../shared/shared.module';
import { RolesComponent } from './roles.component';

@NgModule({
    declarations: [
        NuevoRolComponent,
        RolesComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [
        NuevoRolComponent,
        RolesComponent
    ],
    providers: [],
})
export class RolesModule {}
