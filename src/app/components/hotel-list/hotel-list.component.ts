import { Component, OnInit } from '@angular/core';

import { Store } from 'src/app/store/store';
import { Observable } from 'rxjs';

import { Hotel } from 'src/app/models/hotel.interface';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {
 
  hotels$: Observable<Hotel[]>;
  selectedHotel$: Observable<Hotel>;

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    this.hotels$ = this.store.select('hotels');
    this.selectedHotel$ = this.store.select('selected');
  } 

}
