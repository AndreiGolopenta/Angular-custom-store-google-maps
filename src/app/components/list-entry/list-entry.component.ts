import { Component, Input } from '@angular/core';
import { Hotel } from 'src/app/models/hotel.interface';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-list-entry',
  templateUrl: './list-entry.component.html',
  styleUrls: ['./list-entry.component.scss']
})
export class ListEntryComponent {

  constructor(
    private mapservice: MapService
    ) {}

  @Input()
  hotel: Hotel;

  @Input()
  selectedHotel: Hotel;

  selectHotel(hotel: Hotel, icon: HTMLElement, event: MouseEvent) {
    if (event.target !== icon) {
      this.mapservice.update(hotel, 'selectHotel');
    }
  }

  addFavorite(hotel: Hotel) {
    this.mapservice.update(hotel, 'favourites');
  }

  toggleActiveClass() {
    if (this.selectedHotel) {
      if (this.selectedHotel.id === this.hotel.id) {
        return true;
      }
    }
  }

}
