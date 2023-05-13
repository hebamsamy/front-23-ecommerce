import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Models/IProduct';
import { ProductService } from 'src/app/Services/product.service';
import { WishlistService } from 'src/app/Services/wishlist.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product:IProduct ={}
  constructor(private wishSrv:WishlistService ,private prdSrv:ProductService,private router:Router){
    
  }
  add(prd:IProduct){}
  addToWishlist(product:IProduct){
    this.wishSrv.add(product).subscribe({
      next:(res)=>{
        console.log(res)
        this.wishSrv.setInStorage(res.data as IProduct[])
      }
    })
  }
  delete(id:string){
   if( confirm("Are You Sure You Want to Delete This Product")){
    this.prdSrv.delete(id).subscribe({
      next:(res)=>{
        this.router.navigateByUrl("/home")
      }
    })
   }
  }
}
