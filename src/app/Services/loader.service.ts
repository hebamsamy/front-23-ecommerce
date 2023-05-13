import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
isLoading:BehaviorSubject<boolean>
constructor() { 
  this.isLoading = new BehaviorSubject<boolean>(false)
}


//only interceptor set in Subject
hideloader(){
  this.isLoading.next(false)
}
showloader(){
  this.isLoading.next(true)
}
//all app Supscribe

}
