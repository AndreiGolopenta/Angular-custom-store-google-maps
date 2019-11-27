import { Component, Output, EventEmitter } from '@angular/core';
import { searchAnimation } from 'src/app/animations/animations';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [searchAnimation]
})
export class SearchComponent {

  focus: boolean = false;

  @Output()
  search: EventEmitter<string> = new EventEmitter<string>();

  onFocus() {
    this.focus = true;
  }

  onBlur() {
    this.focus = false;
  }

  handleSearch(value: string) {
    this.search.emit(value);
  }

}
