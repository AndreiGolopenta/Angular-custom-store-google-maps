import { trigger, state, style, transition, animate } from '@angular/animations';

export const searchAnimation = 
  trigger('startAnimation', [
    state('initial', style({
      width: '120px'
    })),
    state('final', style({
      width: '170px'
    })),
    transition('initial <=> final', [
      animate('300ms ease-in-out')
    ])
  ]);