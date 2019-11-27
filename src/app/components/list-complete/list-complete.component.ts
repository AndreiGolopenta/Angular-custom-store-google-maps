import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Hotel } from 'src/app/models/hotel.interface';

@Component({
  selector: "app-list-complete",
  templateUrl: "./list-complete.component.html",
  styleUrls: ["./list-complete.component.scss"]
})
export class ListCompleteComponent implements OnInit {

  height: string = `${window.innerHeight - 90}px`;

  @Input()
  hotels: Hotel[];

  @Input()
  selectedHotel: Hotel;

  constructor() {}

  ngOnInit() {
    window.addEventListener("resize", () => {
      this.height = `${window.innerHeight - 90}px`;
    });
  }

}
