import { Component } from '@angular/core';

import { Nav } from '../../models/nav.interface';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  navigation: Nav[] = [
    { link: '/', name: 'Hotels', icon: 'hotel', exact: true },
    { link: '/hotel-detail', name: 'Details', icon: 'details', exact: false },
    { link: '/favorites', name: 'Favorites', icon: 'favorite', exact: false }
  ];

}
