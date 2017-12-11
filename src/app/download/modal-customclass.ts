import { Component, ViewEncapsulation } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { ChangelogService } from '../changelog.service';

@Component({
    selector: 'ngbd-modal-customclass',
    templateUrl: './modal-customclass.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./modal-customclass.css']
})
export class NgbdModalCustomclass {
    closeResult: string;

    changeLog: any[];

    constructor(private modalService: NgbModal, private _changelog: ChangelogService) {
        this.changeLog = _changelog.getChangelog();
     }

    open(content) {
        this.modalService.open(content, { windowClass: 'dark-modal' });
    }

}