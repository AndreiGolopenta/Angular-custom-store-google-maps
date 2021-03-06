import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from 'src/app/models/hotel.interface';
import { Store } from 'src/app/store/store';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  zoom: number = 13;
  lat: number = 44.32;
  lng: number = 23.8;
  width: string = `${window.innerWidth - 478}px`;
  hotels$: Observable<Hotel[]>;
  selectedHotel$: Observable<Hotel[]>;

  constructor(
    private store: Store,
    private mapService: MapService
  ) { }

  ngOnInit() {
    window.addEventListener('resize', () => {
      this.width = `${window.innerWidth - 478}px`;
    });

    this.hotels$ = this.store.select('hotels');
    this.selectedHotel$ = this.store.select('selected');
  }

  handleClick(hotel: Hotel) {
    this.mapService.update(hotel, 'selectHotel');
  }

  searchHotel(val: string) {
    this.mapService.getHotels$.subscribe((hotels: Hotel[]) => {
      const searchResult = hotels.filter((hotel: Hotel) => {
        return hotel.name.toLocaleLowerCase().includes(val.toLocaleLowerCase());
      });
      this.store.set('hotels', searchResult);
    });
  }

}
