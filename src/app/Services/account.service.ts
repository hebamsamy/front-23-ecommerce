import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { APIResult } from '../Models/ApiResault';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }
 orignaPath ="http://localhost:5000/" 

  register( data:User){
    return this.http.post<APIResult>(this.orignaPath+"user/register",data)
  }
}
