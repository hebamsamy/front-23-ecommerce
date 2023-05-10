import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { APIResult } from '../Models/ApiResault';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  orignaPath ="http://localhost:5000/" 
  StoredUserSub:BehaviorSubject<StoredUser>
  constructor(private http:HttpClient) { 
    this.StoredUserSub = new BehaviorSubject<StoredUser>(this.getuser())
  }

  setuser(token:string, name:string){
    let s= {token:token,name:name} as StoredUser;
    localStorage.setItem("storedUser",JSON.stringify(s))
  }
  getuser():StoredUser{
    return JSON.parse( localStorage.getItem("storedUser")??"{}") as StoredUser
  }
  register( data:User){
    return this.http.post<APIResult>(this.orignaPath+"user/register",data)
  }
  login( email:string,password:string){
    return this.http.post<APIResult>(this.orignaPath+"user/login",{password:password,email:email})
  }
}
interface StoredUser{
name:string;
token:string;
}
