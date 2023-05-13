import { Injectable } from '@angular/core';
import { BehaviorSubject} from "rxjs";
import { IProduct } from '../Models/IProduct';
import { HttpClient } from '@angular/common/http';
import { APIResult } from '../Models/ApiResault';
@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  wishlistSubject:BehaviorSubject<IProduct[]>;
  constructor(private http:HttpClient) { 
    this.wishlistSubject = new BehaviorSubject<IProduct[]>([])
  }
  setInStorage(val:IProduct[]){
    this.wishlistSubject.next(val)
  }



  ////////////////////////////////API
  getAll(){
    return this.http.get<APIResult>("http://localhost:5000/user/wishlist")
  }
  add(prd:IProduct){
    return this.http.post<APIResult>("http://localhost:5000/user/wishlist/add",prd)
  }
  remove(id:string){
    return this.http.delete<APIResult>("http://localhost:5000/user/wishlist/remove/"+id)
  }
  empty(){
    return this.http.delete<APIResult>("http://localhost:5000/user/wishlist/empty")
  }

}
