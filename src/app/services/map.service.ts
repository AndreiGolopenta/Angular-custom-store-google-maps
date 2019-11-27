import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

import { Store } from "../store/store";
import { Hotel } from "../models/hotel.interface";
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class MapService {
  constructor(
    private http: HttpClient, 
    private store: Store,
    private router: Router
    ) {}

  getHotels$: Observable<Hotel[]> = this.http
    .get<Hotel[]>("http://localhost:3000/hotels")
    .pipe(tap(next => this.store.set('hotels', next)));

  update(hotel: Hotel, prop: string) {
    switch (prop) {
      case 'favourites': {
        this.http
          .put<Hotel>(`http://localhost:3000/hotels/${hotel.id}`, {
            ...hotel,
            [prop]: !hotel[prop]
          })
          .subscribe(() => {
            const hotels = this.store.value.hotels;
            const selectedHotel = this.store.value.selected;
            const updateHotels = hotels.map((value: Hotel) => {
              if (value.id === hotel.id) {
                return { ...value, [prop]: !value[prop] };
              } else {
                return value;
              }
            });
            this.store.set('hotels', updateHotels);

            if (selectedHotel) {
              if (selectedHotel.id === hotel.id) {
                this.store.set('selected', { ...hotel, [prop]: !hotel[prop] });
              }
            }
            
          });
        break;
      }
      case 'selectHotel': {
        const selected = this.store.value.selected;

        this.store.set('selected', hotel);
        this.router.navigate(['/hotel-detail']);
        if (selected) {
          if (selected.id === hotel.id) {
            this.store.set('selected', undefined);
            this.router.navigate(['/']);
          }
        }
        break;
      }
    }
  }
}
