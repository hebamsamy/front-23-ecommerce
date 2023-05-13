import { Component } from '@angular/core';
import { IProduct } from 'src/app/Models/IProduct';
import { AccountService, StoredUser } from 'src/app/Services/account.service';
import { WishlistService } from 'src/app/Services/wishlist.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
count:number=0
constructor(private wishSrv:WishlistService){
  this.wishSrv.wishlistSubject.subscribe((val)=>{
    this.count = val.length
  })
  this.wishSrv.getAll().subscribe(
    (res)=>{
      this.wishSrv.setInStorage(res.data as IProduct[])
    }
  )
}

logout(){
}
}
