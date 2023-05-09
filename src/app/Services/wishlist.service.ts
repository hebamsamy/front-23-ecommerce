import { Injectable } from '@angular/core';
import { Subject ,BehaviorSubject} from "rxjs";
import { IProduct } from '../Models/IProduct';
@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  // wishlistSubject:Subject<IProduct[]>;
  wishlistSubject:BehaviorSubject<IProduct[]>;
  list:IProduct[]
  constructor() { 
    this.list = this.getFromStrorage()
    //option one
    // this.wishlistSubject = new Subject<IProduct[]>()
    // this.wishlistSubject.next(this.list)
    
    //option two
    this.wishlistSubject = new BehaviorSubject<IProduct[]>(this.list)
  }

  getFromStrorage():IProduct[]
  {
    return JSON.parse( localStorage.getItem("wishlist")??"[]")
  }
  setInStorage(val:IProduct[]){
    localStorage.setItem("wishlist",JSON.stringify(this.list))
  }
  add(prd:IProduct){
    this.list.push(prd)
    this.wishlistSubject.next(this.list)
    this.setInStorage(this.list)
  }
  remove(delprd:IProduct){
    //1 4 6
    this.list = this.list.filter(prd=>prd.id!==delprd.id)
    this.wishlistSubject.next(this.list)
    this.setInStorage(this.list)

  }
  empty(){
    this.list=[]
    this.wishlistSubject.next(this.list)
    this.setInStorage(this.list)

  }

}
