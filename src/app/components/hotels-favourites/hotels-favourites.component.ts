import { Component, OnInit } from "@angular/core";
import { Store } from "src/app/store/store";
import { Observable } from "rxjs";
import { map, filter } from "rxjs/operators";
import { Hotel } from "src/app/models/hotel.interface";

@Component({
  selector: "app-hotels-favourites",
  templateUrl: "./hotels-favourites.component.html",
  styleUrls: ["./hotels-favourites.component.scss"]
})
export class HotelsFavouritesComponent implements OnInit {

  favourites$: Observable<Hotel[]>;
  selectedHotel$: Observable<Hotel>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.favourites$ = this.store.select("hotels").pipe(
      filter(Boolean),
      map((hotels: Hotel[]) =>
        hotels.filter((hotel: Hotel) => hotel.favourites)
      )
    );

    this.selectedHotel$ = this.store.select('selected');
  }
}
