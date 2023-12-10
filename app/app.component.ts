import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'ELEMENTS', url: '/tableofelements', icon: 'book' },
   { title: 'About', url: '/about', icon: 'person' }

    // { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    //{ title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    //{ title: 'Archived', url: '/folder/archived', icon: 'archive' },
    //{ title: 'Trash', url: '/folder/trash', icon: 'trash' },
    //{ title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['elements'];
  constructor() {}
}
