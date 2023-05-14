import { Component } from '@angular/core';
import { query, style, transition, trigger, animate } from '@angular/animations';

@Component({
  selector: 'app-vendor-layout',
  templateUrl: './vendor-layout.component.html',
  styleUrls: ['./vendor-layout.component.css'],
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
      ])]),
  ]
})
export class VendorLayoutComponent {

}
