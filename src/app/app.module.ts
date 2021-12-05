import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IniciologoComponent } from './iniciologo/iniciologo.component';

@NgModule({
  declarations: [
    AppComponent,
    IniciologoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule /*  */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
