import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postName: string;
  @Input() statusPost : string;

  constructor() { }

  ngOnInit() {
  }

  getStatus() {
    return this.statusPost
  }

  onLoveIt() {
    console.log("LOVE IT --> +1")
  }

}
