import {
  trigger,
  transition,
  style,
  query,
  group,
  animate,
} from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [
  transition('login => signin, signin => login', [
    query(':enter, :leave', [
      style({ position: 'absolute', width: '100%' }),
    ], { optional: true }),
    group([
      query(':leave', [
        animate('350ms ease-in', style({ opacity: 0, transform: 'translateY(-20px)' })),
      ], { optional: true }),
      query(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('350ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ], { optional: true }),
    ]),
  ]),
  transition('* <=> *', [
    query(':enter, :leave', [
      style({ position: 'absolute', width: '100%' }),
    ], { optional: true }),
    group([
      query(':leave', [
        animate('200ms ease-in', style({ opacity: 0 })),
      ], { optional: true }),
      query(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease-out', style({ opacity: 1 })),
      ], { optional: true }),
    ]),
  ]),
]);
