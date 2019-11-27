import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsFavouritesComponent } from './hotels-favourites.component';

describe('HotelsFavouritesComponent', () => {
  let component: HotelsFavouritesComponent;
  let fixture: ComponentFixture<HotelsFavouritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsFavouritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
