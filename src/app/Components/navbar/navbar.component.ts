import { Component } from '@angular/core';
import { WishlistService } from 'src/app/Services/wishlist.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
count:number=0
constructor(private wishSrv:WishlistService){
  // this.count = this.wishSrv.list.length
  this.wishSrv.wishlistSubject.subscribe((val)=>{
    this.count = val.length
  })

}
}
