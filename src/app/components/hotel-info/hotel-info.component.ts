import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hotel } from 'src/app/models/hotel.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-info',
  templateUrl: './hotel-info.component.html',
  styleUrls: ['./hotel-info.component.scss']
})
export class HotelInfoComponent implements OnInit {

  height: string = `${window.innerHeight - 380}px`;

  @Input()
  hotel: Hotel;

  @Output()
  toggle: EventEmitter<Hotel> = new EventEmitter<Hotel>();

  constructor(
    private router: Router
    ) {}

  ngOnInit() {
    window.addEventListener("resize", () => {
      this.height = `${window.innerHeight - 380}px`;
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }

  toggleFavourite() {
    this.toggle.emit(this.hotel);
  }

}
