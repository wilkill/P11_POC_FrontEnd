import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MedheadGPSComponent } from './medhead-gps/medhead-gps.component';
import { MedheadHeaderComponent } from './medhead-header/medhead-header.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MedheadGPSComponent,
    MedheadHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    registerLocaleData(fr.default);
  }
}
