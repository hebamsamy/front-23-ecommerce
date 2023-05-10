import { Component } from '@angular/core';
import { IProduct } from 'src/app/Models/IProduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
list:IProduct[]
// prdSrv :ProductService
constructor(private prdSrv :ProductService){
  this.list = []
  // this.prdSrv =new ProductService()
  this.prdSrv.getAll().subscribe({
    next:(res)=>{
  let temp = res.data as IProduct[]
  temp.forEach(item=>{
    item.id = item._id
  })
      this.list = temp
    }
  })
}
}
