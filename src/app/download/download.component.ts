import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  loremIpsum: string = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis explicabo aliquam, saepe quod a voluptates
  officiis ratione nihil. Placeat et, autem nulla dolore tempora eligendi animi quisquam blanditiis iusto earum?`;

  uputstvoTitle: string = 'Uputstvo za instalaciju';
  uputstvoSubtitle: string = 'Detaljan tutorijal za pocetnike';

  launcherName: string = 'Columbia State Launcher';
  launcherVersion: string = 'v1.0.0';
  launcherReleased: string = '30.12.2017';

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
