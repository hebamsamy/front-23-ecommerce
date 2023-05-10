import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  
constructor(private route:ActivatedRoute,private prdSrv:ProductService){
  this.route.params.subscribe(
    (pram)=>{

    this.prdSrv.getByID(pram["id"]).subscribe({
      next:(res)=>{
        console.log(res.data)
      }
    })
  })
}
}
