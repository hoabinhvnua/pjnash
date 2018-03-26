import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatModulModule } from './mat-modul/mat-modul.module';
import { CarouselModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    SingInComponent,
    SingUpComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    MatModulModule,
    CarouselModule.forRoot()
  ],
  entryComponents: [
    SingInComponent,
    SingUpComponent,
    AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
