import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hotel-rating',
  templateUrl: './hotel-rating.component.html',
  styleUrls: ['./hotel-rating.component.scss']
})
export class HotelRatingComponent {

  @Input()
  stars: number;

}
