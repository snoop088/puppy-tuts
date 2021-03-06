import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PuppiesModule } from './puppies/puppies.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PuppiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
