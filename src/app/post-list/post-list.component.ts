import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  posts = [
    {
      name: 'Critiques sur Lestat le vampire de Anne Rice',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque necessitatibus aut laboriosam officiis consectetur est sunt assumenda iusto consequuntur facere dignissimos sequi nemo nostrum consequatur aspernatur error, hic ratione possimus.',
      loveIts: 17,
      created_at: '01/01/2020'
    },
    {
      name: 'Critiques sur Le Misanthrope de Molière',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque necessitatibus aut laboriosam officiis consectetur est sunt assumenda iusto consequuntur facere dignissimos sequi nemo nostrum consequatur aspernatur error, hic ratione possimus.',
      loveIts: 55,
      created_at: '01/02/2020'
    },
    {
      name: 'Critiques sur Altered Carbon de Richard Morgan',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque necessitatibus aut laboriosam officiis consectetur est sunt assumenda iusto consequuntur facere dignissimos sequi nemo nostrum consequatur aspernatur error, hic ratione possimus.',
      loveIts: -65,
      created_at: '01/03/2020'
    },
    {
      name: 'Critiques sur Le pendule de Foucault de Umberto Eco',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque necessitatibus aut laboriosam officiis consectetur est sunt assumenda iusto consequuntur facere dignissimos sequi nemo nostrum consequatur aspernatur error, hic ratione possimus.',
      loveIts: 29,
      created_at: '01/09/2020'
    }
  ]
}
