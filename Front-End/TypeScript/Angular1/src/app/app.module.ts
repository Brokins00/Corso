import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HellowWorldNgifComponent } from './components/hellow-world-ngif/hellow-world-ngif.component';

@NgModule({
  declarations: [
    AppComponent,
    HellowWorldNgifComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
