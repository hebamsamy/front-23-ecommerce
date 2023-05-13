import { Component } from '@angular/core';
import { IProduct } from 'src/app/Models/IProduct';
import { WishlistService } from 'src/app/Services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  list:IProduct[]=[]
 constructor( private wishSrv:WishlistService){
  this.wishSrv.wishlistSubject.subscribe({
    next:(val)=>{
      this.list = val
    }
  })
 }
 remove(id:string){
  this.wishSrv.remove(id).subscribe({
    next:(res)=>{
      this.wishSrv.setInStorage(res.data as IProduct[])
    }
  })
 }
 empty(){
  this.wishSrv.empty().subscribe({
    next:(res)=>{
      this.wishSrv.setInStorage(res.data as IProduct[])
    }
  })
 }
}
