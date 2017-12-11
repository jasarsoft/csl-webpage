import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { NgbdModalCustomclass } from './download/modal-customclass';
import { AppComponent } from './app.component';
import { DownloadComponent } from './download/download.component';
import { ServerInfoService } from './server-info.service';
import { ChangelogService } from './changelog.service';


@NgModule({
  declarations: [
    AppComponent,
    DownloadComponent,
    NgbdModalCustomclass
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [ServerInfoService, ChangelogService],
  bootstrap: [DownloadComponent]
})
export class AppModule { }
