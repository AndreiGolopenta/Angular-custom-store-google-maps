import { Observable, BehaviorSubject } from "rxjs";
import { pluck } from "rxjs/operators";

import { State } from '../models/state.interface';

const state: State = {
  hotels: undefined,
  selected: undefined
};

export class Store {

  private subject = new BehaviorSubject<State>(state);

  private store = this.subject.asObservable();

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pipe(pluck(name));
  }

  set(name: string, state: any) {
    this.subject.next({
      ...this.value, [name]: state
    });
  }
}
