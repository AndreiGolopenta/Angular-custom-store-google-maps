import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hotel } from 'src/app/models/hotel.interface';

@Component({
  selector: 'app-map-marker',
  templateUrl: './map-marker.component.html',
  styleUrls: ['./map-marker.component.scss']
})
export class MapMarkerComponent {

  @Input()
  hotel: Hotel;

  @Input()
  selectedHotel: Hotel;

  @Output()
  selectFromMap: EventEmitter<Hotel> = new EventEmitter<Hotel>();
  
  handleClick() {
    this.selectFromMap.emit(this.hotel);
  }

  toggleActiveClass() {
    if (this.selectedHotel) {
      if (this.selectedHotel.id === this.hotel.id) {
        return true;
      }
    }
  }

}
