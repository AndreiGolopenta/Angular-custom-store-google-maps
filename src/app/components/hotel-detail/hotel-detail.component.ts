import { Component, OnInit } from "@angular/core";
import { Store } from "src/app/store/store";
import { Hotel } from "src/app/models/hotel.interface";
import { Observable } from 'rxjs';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: "app-hotel-detail",
  templateUrl: "./hotel-detail.component.html",
  styleUrls: ["./hotel-detail.component.scss"]
})
export class HotelDetailComponent implements OnInit {

  detail$: Observable<Hotel>;

  constructor(
    private store: Store,
    private mapService: MapService
    ) {}

  ngOnInit() {
    this.detail$ = this.store.select('selected');
  }

  toggleFavourite(hotel: Hotel) {
    this.mapService.update(hotel, 'favourites');
  }
}
