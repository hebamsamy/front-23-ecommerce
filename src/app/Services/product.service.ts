import { Injectable } from '@angular/core';
import { IProduct } from '../Models/IProduct';
import { HttpClient } from '@angular/common/http';
import { APIResult } from '../Models/ApiResault';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 constructor(private http:HttpClient){

 }
 orignaPath ="http://localhost:5000/" 
  getAll(){
    return this.http.get<APIResult>(this.orignaPath+"product");
  }
  getByID(id :string){
    return this.http.get<APIResult>(this.orignaPath+"product/"+id);
  }
  getByCategoryID(id:number){
    return this.http.get<APIResult>(this.orignaPath+"product/category/"+id);
  }
  add(data:FormData){
    return this.http.post<APIResult>(this.orignaPath+'product/add',data)
  }
  edit(data:FormData,id:string){
    return this.http.put<APIResult>(this.orignaPath+'product/edit/'+id,data)
  }
  delete(id :string){
    return this.http.delete<APIResult>(this.orignaPath+"product/delete/"+id);
  }
  // updateProduct(id :number,qty:number):void{
  //   this.Products.forEach(item=>{
  //     if(item.id ==id){
  //       item.quantity = item.quantity??0 - qty
  //     }
  //   })
  // }
}
