import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

import {
  TdMediaService,
  TdDataTableService,
} from '@covalent/core';



import { MenusService } from './services/menus.service';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { PromocionComponent } from './promocion/promocion.component';
import { DesempenoComponent } from './desempeno/desempeno.component';
import { ReconocimientoComponent } from './reconocimiento/reconocimiento.component';
import { FormacionContinuaComponent } from './formacion-continua/formacion-continua.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { AlcancesComponent } from './administracion/alcances/alcances.component';
import { SharedModule } from './shared/shared.module';
import { AdministracionModule } from './administracion/administracion.module';
import { UsuariosModule } from './administracion/usuarios/usuarios.module';
import { RolesModule } from './administracion/roles/roles.module';
import { PersonasModule } from './administracion/personas/personas.module';
import { MainAdministracionComponent } from './administracion/main-administracion/main-administracion.component';
import { OpcionesService } from '../app/services/opciones.service';
import { CctsService } from '../app/services/ccts.service';
import { PersonasService } from './services/personas.service';
import { NominaService } from './services/nomina.service';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { IngresoModule } from './ingreso/ingreso.module';
import { PromocionModule } from './promocion/promocion.module';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    PrincipalComponent,
    DesempenoComponent,
    ReconocimientoComponent,
    FormacionContinuaComponent,
    AdministracionComponent,
    IngresoComponent,
    PromocionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    AdministracionModule,
    IngresoModule,
    PromocionModule
  ],
  providers: [
    TdMediaService,
    MenusService,
    TdDataTableService,
    OpcionesService,
    CctsService,
    PersonasService,
    NominaService,
    MenusService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
