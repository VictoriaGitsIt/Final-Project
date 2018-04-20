import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';


import { AppComponent } from './app.component';
import { SuperHeroComponent } from './super-hero/super-hero.component';


@NgModule({
  declarations: [
    AppComponent,
    SuperHeroComponent
  ],
  imports: [
    BrowserModule,
    HttpModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
