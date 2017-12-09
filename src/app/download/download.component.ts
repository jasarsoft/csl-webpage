import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  downloadUrl: string = 'https://columbia-state.com/launcher/setup-cs.exe';
  downloaded: boolean = false;

  fileSize: number = 28.7;
  fileName: string = 'setup-cs.exe';

  serverName: string = 'Columbia State';
  serverSlogan: string = 'Neki slogan';

  toastMsg: string;

  constructor() { }

  ngOnInit() {
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
