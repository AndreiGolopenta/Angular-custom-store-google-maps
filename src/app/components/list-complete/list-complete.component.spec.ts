import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCompleteComponent } from './list-complete.component';

describe('ListCompleteComponent', () => {
  let component: ListCompleteComponent;
  let fixture: ComponentFixture<ListCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
