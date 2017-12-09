import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DownloadComponent } from './download/download.component';


@NgModule({
  declarations: [
    AppComponent,
    DownloadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [DownloadComponent]
})
export class AppModule { }
