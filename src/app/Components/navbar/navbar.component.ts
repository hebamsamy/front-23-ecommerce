import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
islogged:boolean = false
UserName:string= ""
constructor(private wishSrv:WishlistService,private accSrv:AccountService,private router:Router){
  this.wishSrv.wishlistSubject.subscribe((val)=>{
    this.count = val.length
  })
  this.wishSrv.getAll().subscribe(
    (res)=>{
      this.wishSrv.setInStorage(res.data as IProduct[])
    }
  )
  this.accSrv.StoredUserSub.subscribe({
    next:(val)=>{
      this.UserName = val.name
      this.islogged = val.token==""?false:true
    }
  })
}

logout(){
  this.accSrv.logout()
  this.router.navigate(['/login',"/home"])
  this.wishSrv.setInStorage([])

}
}
