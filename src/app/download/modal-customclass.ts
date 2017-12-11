import { Component, ViewEncapsulation } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { ChangelogService } from '../changelog.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'ngbd-modal-customclass',
    templateUrl: './modal-customclass.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./modal-customclass.css']
})
export class NgbdModalCustomclass implements OnInit {
    closeResult: string;

    changeLog: any[];

    launcherVersion: string;
    launcherReleased: string;

    constructor(private modalService: NgbModal, private _changelogService: ChangelogService) {
     }

    open(content) {
        this.modalService.open(content, { windowClass: 'dark-modal' });
    }

    ngOnInit(): void {
        this.changeLog = this._changelogService.getChangelog();
    }
}