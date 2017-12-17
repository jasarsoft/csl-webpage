import { Component, OnInit } from '@angular/core';
import { ServerInfoService } from '../server-info.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  loremIpsum: string;

  uputstvoTitle: string;
  uputstvoSubtitle: string;

  launcherName: string;
  launcherVersion: string;
  launcherReleased: string;

  serverText: string;

  downloadUrl: string;
  downloadUrlOffline: string;
  downloaded: boolean = false;

  fileSize: number;
  fileName: string;

  serverName: string;
  serverSlogan: string;

  toastMsg: string;

  constructor(private _info: ServerInfoService) {
   this.setInfo();  
  }

  ngOnInit() {
  }

  setInfo(): void {
    this.loremIpsum = this._info.loremIpsum;
    this.uputstvoTitle = this._info.uputstvoTitle;
    this.uputstvoSubtitle = this._info.uputstvoSubtitle;
    this.launcherName = this._info.launcherName;
    this.launcherVersion = this._info.launcherVersion;
    this.launcherReleased = this._info.launcherReleased;
    this.downloadUrl = this._info.downloadUrl;
    this.downloadUrlOffline = this._info.downloadUrl;
    this.fileSize = this._info.fileSize;
    this.fileName = this._info.fileName;
    this.serverName = this._info.serverName;
    this.serverSlogan = this._info.serverSlogan;
  }

  goToDownload(): void {
    window.location.href=this.downloadUrl;
    this.toggleDownloaded();
  }

  goToDownloadOffline(): void {
    window.location.href=this.downloadUrlOffline;
    this.toggleDownloaded();
  }

  toggleDownloaded(): void {
    this.downloaded = !this.downloaded;
    this.toastMsg = 'Download fajla je upravo poceo!';
  }

}
