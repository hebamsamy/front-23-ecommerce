import { Component } from '@angular/core';
import { LoaderService } from './Services/loader.service';
import { BehaviorSubject } from 'rxjs';
import { query, style, transition, trigger, animate, animateChild, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeMove', [
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ],
          { optional: true }),
        query(':enter', [
          style({ left: '-100%' })
        ], { optional: true }),
        query(':leave', animateChild(), { optional: true }),
        group([
          query(':leave', [
            animate('300ms ease-out', style({ left: '100%' }))
          ], { optional: true }),
          query(':enter', [
            animate('300ms ease-out', style({ left: '0%' }))
          ], { optional: true }),
        ]),
      ]),
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ], { optional: true }),
        query(':enter', [
          style({ left: '-100%' })
        ], { optional: true }),
        query(':leave', animateChild(), { optional: true }),
        group([
          query(':leave', [
            animate('200ms ease-out', style({ left: '100%', opacity: 0 }))
          ], { optional: true }),
          query(':enter', [
            animate('300ms ease-out', style({ left: '0%' }))
          ], { optional: true }),
          query('@*', animateChild(), { optional: true })
        ]),
      ])
    ])
  ]
})
export class AppComponent {
  title = 'ecommerce';
  isloading: BehaviorSubject<boolean>
  constructor(private loadSrv: LoaderService) {
    this.isloading = this.loadSrv.isLoading
  }
}
