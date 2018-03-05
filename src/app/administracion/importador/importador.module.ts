import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportadorComponent } from './importador.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [ImportadorComponent],
    imports: [
        SharedModule,
     ],
    exports: [ImportadorComponent],
    providers: [],
})
export class ImportadorModule {}
