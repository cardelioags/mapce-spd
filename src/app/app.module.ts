import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app.routes";
import { HttpClientModule } from '@angular/common/http';

import { 
  CovalentLayoutModule,
  CovalentStepsModule,
  CovalentMediaModule,
  TdMediaService,
} from "@covalent/core";

import { 
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatTooltipModule
} from "@angular/material";

import { MenusService } from "../services/menus.service";

import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { PromocionComponent } from './promocion/promocion.component';
import { DesempenoComponent } from './desempeno/desempeno.component';
import { ReconocimientoComponent } from './reconocimiento/reconocimiento.component';
import { FormacionContinuaComponent } from './formacion-continua/formacion-continua.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { MainAdministracionComponent } from './administracion/main-administracion/main-administracion.component';
import { PersonasComponent } from './administracion/personas/personas.component';
import { UsuariosComponent } from './administracion/usuarios/usuarios.component';
import { RolesComponent } from './administracion/roles/roles.component';
import { OpcionesComponent } from './administracion/opciones/opciones.component';
import { AlcancesComponent } from './administracion/alcances/alcances.component'

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    IngresoComponent,
    PromocionComponent,
    DesempenoComponent,
    ReconocimientoComponent,
    FormacionContinuaComponent,
    AdministracionComponent,
    MainAdministracionComponent,
    PersonasComponent,
    UsuariosComponent,
    RolesComponent,
    OpcionesComponent,
    AlcancesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentMediaModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatTooltipModule
  ],
  providers: [ TdMediaService, MenusService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
