import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { AppComponent } from "./app.component";
import { PrincipalComponent } from "./principal/principal.component";
import { DesempenoComponent } from "./desempeno/desempeno.component";
import { IngresoComponent } from "./ingreso/ingreso.component";
import { PromocionComponent } from "./promocion/promocion.component";
import { ReconocimientoComponent } from "./reconocimiento/reconocimiento.component";
import { FormacionContinuaComponent } from "./formacion-continua/formacion-continua.component";

 
const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: 'principal', component: PrincipalComponent },
  { path: 'ingreso', component: IngresoComponent },
  { path: 'promocion', component: PromocionComponent },
  { path: 'desempeno', component: DesempenoComponent },
  { path: 'reconocimiento', component: ReconocimientoComponent },
  { path: 'formacionContinua', component: FormacionContinuaComponent },

];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}