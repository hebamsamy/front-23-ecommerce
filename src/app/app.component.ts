import { Component } from '@angular/core';
import { LoaderService } from './Services/loader.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';
  isloading:BehaviorSubject<boolean>
  constructor(private loadSrv:LoaderService){
    this.isloading =  this.loadSrv.isLoading
  }
}
