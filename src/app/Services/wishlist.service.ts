import { Injectable } from '@angular/core';
import { Subject ,BehaviorSubject} from "rxjs";
import { IProduct } from '../Models/IProduct';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIResult } from '../Models/ApiResault';
import { AccountService } from './account.service';
@Injectable({
  providedIn: 'root'
})
export class WishlistService {


  userOptions={
    headers:new HttpHeaders().set("authorization",`bearer ${this.accSrv.getuser().token}`)
  }

  // wishlistSubject:Subject<IProduct[]>;
  wishlistSubject:BehaviorSubject<IProduct[]>;
  constructor(private http:HttpClient,private accSrv:AccountService ) { 
    //option one
    // this.wishlistSubject = new Subject<IProduct[]>()
    // this.wishlistSubject.next(this.list)
    
    //option two
    this.wishlistSubject = new BehaviorSubject<IProduct[]>([])
  }
 getAll(){
  return this.http.get("http://localhost:5000/user/wishlist",this.userOptions)
 }
  
  setInStorage(val:IProduct[]){
    this.wishlistSubject.next(val)
  }
  add(prd:IProduct){
    return this.http.post<APIResult>("http://localhost:5000/user/wishlist/add",prd,this.userOptions)
  }
  remove(delprd:IProduct){
    // //1 4 6
    // this.list = this.list.filter(prd=>prd._id!==delprd._id)
    // this.wishlistSubject.next(this.list)
    // this.setInStorage(this.list)

  }
  empty(){
    // this.list=[]
    // this.wishlistSubject.next(this.list)
    // this.setInStorage(this.list)

  }

}
