import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';

// import { ButtonModule } from 'primeng/button';

// Configuración del locale de la App
import localeEs from '@angular/common/locales/es'
import localeFrCa from '@angular/common/locales/fr-CA'
import {registerLocaleData} from '@angular/common';

registerLocaleData(localeEs);
registerLocaleData(localeFrCa);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ProductsModule
    // ButtonModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
