import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './principal/principal.component';
import { DesempenoComponent } from './desempeno/desempeno.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { PromocionComponent } from './promocion/promocion.component';
import { ReconocimientoComponent } from './reconocimiento/reconocimiento.component';
import { FormacionContinuaComponent } from './formacion-continua/formacion-continua.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { MainAdministracionComponent } from './administracion/main-administracion/main-administracion.component';
import { PersonasComponent } from './administracion/personas/personas.component';
import { RolesComponent } from './administracion/roles/roles.component';
import { UsuariosComponent } from './administracion/usuarios/usuarios.component';
import { OpcionesComponent } from './administracion/opciones/opciones.component';
import { AlcancesComponent } from './administracion/alcances/alcances.component';
import { ImportadorComponent } from './administracion/importador/importador.component';
import { CctsComponent } from './administracion/ccts/ccts.component';
import { NominaComponent } from './administracion/nomina/nomina.component';
import { MenusComponent } from './administracion/menus/menus.component';
import { MainIngresoComponent } from './ingreso/main-ingreso/main-ingreso.component';
import { MainPromocionComponent } from './promocion/main-promocion/main-promocion.component';
import { PrelacionesIngresoComponent } from './ingreso/prelaciones-ingreso/prelaciones-ingreso.component';
import { AsignacionesComponent } from './ingreso/asignaciones/asignaciones.component';


const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: 'principal', component: PrincipalComponent },
  { path: 'ingreso', component: IngresoComponent, children: [
    {path: '', component: MainIngresoComponent},
    {path: 'prelaciones', component: PrelacionesIngresoComponent},
    {path: 'asignaciones', component: AsignacionesComponent}
  ]
},
  { path: 'promocion', component: PromocionComponent, children: [
    {path: '', component: MainPromocionComponent}
  ]},
  { path: 'desempeno', component: DesempenoComponent },
  { path: 'reconocimiento', component: ReconocimientoComponent },
  { path: 'formacionContinua', component: FormacionContinuaComponent },
  {
    path: 'administracion',  component: AdministracionComponent, children: [
      {path: '', component: MainAdministracionComponent},
      {path: 'personas', component: PersonasComponent},
      {path: 'roles', component: RolesComponent},
      {path: 'usuarios', component: UsuariosComponent},
      {path: 'roles', component: RolesComponent},
      {path: 'opciones', component: OpcionesComponent},
      {path: 'alcances', component: AlcancesComponent},
      {path: 'importador', component: ImportadorComponent},
      {path: 'ccts', component: CctsComponent},
      {path: 'nomina', component: NominaComponent},
      {path: 'menus', component: MenusComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
