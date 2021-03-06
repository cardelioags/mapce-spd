import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentMediaModule,
    TdMediaService,
    TdDataTableService,
    CovalentFileModule,
    CovalentDataTableModule,
    CovalentPagingModule,
    CovalentSearchModule,
    CovalentMenuModule,
    CovalentMessageModule
  } from '@covalent/core';
  // import { TdDialogService } from "@covalent/core/dialogs";


  import {
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatTooltipModule,
    MatGridListModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatTabsModule,
    MatExpansionModule,
    MatDialogModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatRadioModule
  } from '@angular/material';
import { MainMenuComponent } from '../main-menu/main-menu.component';

@NgModule({
    declarations: [],
    imports: [ ],
    exports: [
        CommonModule,
        RouterModule,
        FormsModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatMenuModule,
        MatTooltipModule,
        MatGridListModule,
        MatOptionModule,
        MatSelectModule,
        MatInputModule,
        MatTabsModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        MatDialogModule,
        MatRadioModule,
        CovalentLayoutModule,
        CovalentStepsModule,
        CovalentMediaModule,
        CovalentFileModule,
        CovalentDataTableModule,
        CovalentPagingModule,
        CovalentSearchModule,
        CovalentMessageModule,
    ],
    providers: [],
})
export class SharedModule {}
