import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

import { 
  CovalentLayoutModule,
  CovalentMediaModule,
  TdMediaService 
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

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    CovalentLayoutModule,
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
  providers: [ TdMediaService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
