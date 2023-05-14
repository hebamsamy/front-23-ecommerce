import { query, style, transition, trigger, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  animations: [
    trigger("routeFade", [
      transition('* <=> *', [
        query(':enter',
          [style({ opacity: 0 })],
          { optional: true }
        ),
        query(':enter',
          [style({ opacity: 0 }),
          animate('1s', style({ opacity: 1 }))],
          { optional: true }
        )
      ])])
  ]
})
export class LayoutComponent {

}
