import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DownloadComponent } from './download/download.component';
import { ServerInfoService } from './server-info.service';


@NgModule({
  declarations: [
    AppComponent,
    DownloadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ServerInfoService],
  bootstrap: [DownloadComponent]
})
export class AppModule { }
