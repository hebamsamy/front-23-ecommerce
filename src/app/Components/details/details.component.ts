import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  
constructor(private route:ActivatedRoute){
  this.route.params.subscribe(
    (pram)=>{

    console.log(pram["id"])
  })
}
}
