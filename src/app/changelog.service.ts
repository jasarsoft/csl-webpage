import { Injectable } from '@angular/core';

@Injectable()
export class ChangelogService {

  changelog_list = [
    { 
      version: 'v1.0.0', 
      released: '23.12.2017', 
      log: [
        `Lorem Ipsum, dolor sit amet consectetur adipisicing elit. Veritatis explicabo aliquam, saepe quod a voluptates
        officiis ratione nihil. Placeat et, autem nulla dolore tempora eligendi animi quisquam blanditiis iusto earum?`, 
        `Lorem Ipsum, dolor sit amet consectetur adipisicing elit. Veritatis explicabo aliquam, saepe quod a voluptates
        officiis ratione nihil. Placeat et, autem nulla dolore tempora eligendi animi quisquam blanditiis iusto earum?`, 
        `Lorem Ipsum, dolor sit amet consectetur adipisicing elit. Veritatis explicabo aliquam, saepe quod a voluptates
        officiis ratione nihil. Placeat et, autem nulla dolore tempora eligendi animi quisquam blanditiis iusto earum?`
      ]
    },
    { 
      version: 'v2.0.0', 
      released: '23.12.2017', 
      log: [
        `Lorem Ipsum, dolor sit amet consectetur adipisicing elit. Veritatis explicabo aliquam, saepe quod a voluptates
        officiis ratione nihil. Placeat et, autem nulla dolore tempora eligendi animi quisquam blanditiis iusto earum?`, 
        `Lorem Ipsum, dolor sit amet consectetur adipisicing elit. Veritatis explicabo aliquam, saepe quod a voluptates
        officiis ratione nihil. Placeat et, autem nulla dolore tempora eligendi animi quisquam blanditiis iusto earum?`, 
        `Lorem Ipsum, dolor sit amet consectetur adipisicing elit. Veritatis explicabo aliquam, saepe quod a voluptates
        officiis ratione nihil. Placeat et, autem nulla dolore tempora eligendi animi quisquam blanditiis iusto earum?`
      ]
    },
    { 
      version: 'v3.0.0', 
      released: '23.12.2017', 
      log: [
        `Lorem Ipsum, dolor sit amet consectetur adipisicing elit. Veritatis explicabo aliquam, saepe quod a voluptates
        officiis ratione nihil. Placeat et, autem nulla dolore tempora eligendi animi quisquam blanditiis iusto earum?`, 
        `Lorem Ipsum, dolor sit amet consectetur adipisicing elit. Veritatis explicabo aliquam, saepe quod a voluptates
        officiis ratione nihil. Placeat et, autem nulla dolore tempora eligendi animi quisquam blanditiis iusto earum?`, 
        `Lorem Ipsum, dolor sit amet consectetur adipisicing elit. Veritatis explicabo aliquam, saepe quod a voluptates
        officiis ratione nihil. Placeat et, autem nulla dolore tempora eligendi animi quisquam blanditiis iusto earum?`
      ]
    }
  ];

  constructor() { }

  getChangelog(): any[] {
    return this.changelog_list;
  }

}
