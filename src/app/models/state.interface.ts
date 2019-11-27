import { Hotel } from './hotel.interface';

export interface State {
  hotels: Hotel[];
  selected: Hotel;
}