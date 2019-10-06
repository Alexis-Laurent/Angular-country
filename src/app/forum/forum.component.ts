import { Component, OnInit } from '@angular/core';

import { Forum } from '../forum';
import { ForumService } from '../forum.service';       

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})

export class ForumComponent implements OnInit {

  forum: Forum[];

  constructor(private forumService: ForumService) { }

  ngOnInit() {
    //this.getForums();
  }

  getForums(): void {
    //this.forumService.getForums().subscribe(forum => this.forum = forum);
  } 

}
