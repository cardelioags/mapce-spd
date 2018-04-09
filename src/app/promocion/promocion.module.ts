import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromocionComponent } from './promocion.component';
import { MainPromocionComponent } from './main-promocion/main-promocion.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        MainPromocionComponent
    ],
    imports: [ SharedModule ],
    exports: [],
    providers: [],
})
export class PromocionModule {}
