import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MapService } from './services/map.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor(private mapService: MapService) {}

  ngOnInit() {
    this.subscription = this.mapService.getHotels$.subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
