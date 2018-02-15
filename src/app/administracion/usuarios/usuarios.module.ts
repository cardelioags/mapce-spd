import { NgModule } from '@angular/core';
import { BuscarUsuarioComponent } from './tabs/buscar-usuario/buscar-usuario.component';
import { EditarUsuarioComponent } from './tabs/editar-usuario/editar-usuario.component';
import { LayoutUsuarioComponent } from './tabs/layout-usuario/layout-usuario.component';
import { NuevaUsuarioComponent } from './tabs/nueva-usuario/nueva-usuario.component';
import { UsuariosComponent } from './usuarios.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [
        UsuariosComponent,
        BuscarUsuarioComponent,
        EditarUsuarioComponent,
        LayoutUsuarioComponent,
        NuevaUsuarioComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        UsuariosComponent,
        BuscarUsuarioComponent,
        EditarUsuarioComponent,
        LayoutUsuarioComponent,
        NuevaUsuarioComponent,
    ],
    providers: [],
})
export class UsuariosModule {}
