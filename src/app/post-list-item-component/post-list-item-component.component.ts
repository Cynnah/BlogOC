import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

  postName: string = 'Mon premier Post'
  creationDate: string = '01/07/2019'

  constructor() { }

  ngOnInit() {
  }

  getStatus() {
    return this.creationDate
  }

}
