import { Component } from '@angular/core';
import { IProduct } from 'src/app/Models/IProduct';
import { ProductService } from 'src/app/Services/product.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
list:IProduct[]
page:number=1
// prdSrv :ProductService


  
constructor(private prdSrv :ProductService,private snackBar: MatSnackBar){
  this.list = []
  // this.prdSrv =new ProductService()
  this.prdSrv.getAll().subscribe({
    next:(res)=>{
  let temp = res.data as IProduct[]
  // temp.forEach(item=>{
  //   item.id = item._id
  // })
      this.list = temp
    }
  })

}

openSnackBar(message: string, action: string) {
  this.snackBar.open(message, action, {
    duration: 2000,
  });
}
// openSnackBar() {
//   console.log(this.snackBar)
//   this.snackBar.open("Hello", "X", {
//     duration: 2000,
//   });
// }
change(val:any){
  this.page = val
}
}
