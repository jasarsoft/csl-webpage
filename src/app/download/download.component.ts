import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  loremIpsum: string = 'Lorem ipsum text';

  uputstvoTitle: string = 'Uputstvo za instalaciju';
  uputstvoSubtitle: string = 'Detaljan tutorijal za pocetnike';

  launcherName: string = 'Columbia State Launcher';
  launcherVersion: string = 'v1.0.0';
  launcherReleased: string = '30.12.2017';

  serverText: string = `Ideja Columbia State je nastala inspirativnom pričom najvećeg dilera u povjesti kokaina Pablo Escobar-a iz kartela Medelin manifestovana i prikazana kroz seriju Narcos u prve dvije sezone. Istu su pokrenuli bivši članovi NovaMahala tima nakon što je projekat zaustavljen iz opravdanih razloga. Najbolja platforma za pretvorbu te ideje jednoglasno bio je San Andreas Multiplayer (SA-MP) preko kojeg zajedno sa igrom Grand Theft Auto San Andreas (GTA:SA) će tim pokušati implementirati jedno najveće uporište kriminala na spram vladajućeg zakonskog prava kojeg će nositi policijski odredi. Columbia State sadrži više dijelova koje je predstavljaju i to su server, launcher i forum. Columbia State Server je nosilac projekta Columbia State oko koje cijelokupna stvar teži. Server je isključivo čisti RolePlay tip sa elementima Hard Play-a i Real Life, koji se prožimaju kroz glavni tip i daju jačinu RP tipu. Glavni fokus je stavljen na biznise koji proizvode močne i dominantne ljude u gradu, mafije koje kroz svoje organizatorske vještine prave najveće probleme i najjačima te policijske snage za očuvanje reda i sprovedbu zakonski odredbi. Columbia State Launcher je aplikacija koja obezbeđuje sve potrebno igraču kako bih pristupio serveru pravilno i lako. Igrač je obavezan posjedovati launcher koji može da skine sa stranice.
  
  `;

  downloadUrl: string = 'https://columbia-state.com/launcher/setup-cs.exe';
  downloaded: boolean = false;

  fileSize: number = 28.7;
  fileName: string = 'setup-cs.exe';

  serverName: string = 'Columbia State';
  serverSlogan: string = 'Neki slogan text ovde';

  toastMsg: string;

  constructor() { 
  }

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
