import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/Models/IProduct';
import { WishlistService } from 'src/app/Services/wishlist.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product:IProduct ={}
  constructor(private wishSrv:WishlistService ){
    
  }
  add(prd:IProduct){}
  addToWishlist(product:IProduct){
    this.wishSrv.add(product)
  }
}
