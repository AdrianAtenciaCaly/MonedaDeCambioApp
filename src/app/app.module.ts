import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http'; // Importa provideHttpClient

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [
    provideClientHydration(), provideHttpClient()// Agrega withFetch() a provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
