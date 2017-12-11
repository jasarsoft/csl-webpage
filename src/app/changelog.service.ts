import { Injectable } from '@angular/core';

@Injectable()
export class ChangelogService {

  changelog_list = [
    'test1',
    'test2',
    'test3',
    'test4'
  ];

  constructor() { }

  getChangelog(): any[] {
    return this.changelog_list;
  }

}
