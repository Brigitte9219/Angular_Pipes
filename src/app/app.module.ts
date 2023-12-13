import { NgModule, LOCALE_ID } from '@angular/core';//Maneja la localización
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

registerLocaleData (localEs);//se registra el idioma español
registerLocaleData (localFr);//Se registra el idioma frances


@NgModule({
  declarations: [
    AppComponent,
    DomseguroPipe,
    ContrasenaPipe,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue:'es'//Se dice que el idioma por defecto es el español
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
