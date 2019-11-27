import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AgmCoreModule } from '@agm/core';

import { Store } from './store/store';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { NavComponent } from './components/nav/nav.component';
import { HotelDetailComponent } from './components/hotel-detail/hotel-detail.component';
import { HotelsFavouritesComponent } from './components/hotels-favourites/hotels-favourites.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { HotelRatingComponent } from './components/hotel-rating/hotel-rating.component';
import { MapMarkerComponent } from './components/map-marker/map-marker.component';
import { ListHeaderComponent } from './components/list-header/list-header.component';
import { ListCompleteComponent } from './components/list-complete/list-complete.component';
import { ListEntryComponent } from './components/list-entry/list-entry.component';
import { HotelInfoComponent } from './components/hotel-info/hotel-info.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
  { path: '', component: HotelListComponent, pathMatch: 'full' },
  { path: 'hotel-detail', component: HotelDetailComponent },
  { path: 'favorites', component: HotelsFavouritesComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    NavComponent,
    HotelDetailComponent,
    HotelsFavouritesComponent,
    HotelListComponent,
    HotelRatingComponent,
    MapMarkerComponent,
    ListHeaderComponent,
    ListCompleteComponent,
    ListEntryComponent,
    HotelInfoComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    Store
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
