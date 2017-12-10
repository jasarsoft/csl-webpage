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
  downloaded: boolean = false;

  fileSize: number;
  fileName: string;

  serverName: string;
  serverSlogan: string;

  toastMsg: string;

  constructor(private _info: ServerInfoService) {
   this.setInfo(_info);  
  }

  ngOnInit() {
  }

  setInfo(_info: ServerInfoService): void {
    this.loremIpsum = _info.loremIpsum;
    this.uputstvoTitle = _info.uputstvoTitle;
    this.uputstvoSubtitle = _info.uputstvoSubtitle;
    this.launcherName = _info.launcherName;
    this.launcherVersion = _info.launcherVersion;
    this.launcherReleased = _info.launcherReleased;
    this.downloadUrl = _info.downloadUrl;
    this.fileSize = _info.fileSize;
    this.fileName = _info.fileName;
    this.serverName = _info.serverName;
    this.serverSlogan = _info.serverSlogan;
  }

  goToDownload(): void {
    window.location.href=this.downloadUrl;
    this.toggleDownloaded();
  }

  toggleDownloaded(): void {
    this.downloaded = !this.downloaded;
    this.toastMsg = 'Download fajla je upravo poceo!';
  }

}
