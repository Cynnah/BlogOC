import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postName: string;
  @Input() statusPost : Number;
  @Input() creationPost: Date;

  constructor() { }

  ngOnInit() {
  }

  getStatus() {
    return this.statusPost
  }

  getColor() {
    if(this.statusPost >= 0) {
      return 'green';
    } else if(this.statusPost <= 0) {
      return 'red';
    }
  }

  onLoveIt() {
    console.log("LOVE IT --> +1")
  }

}
