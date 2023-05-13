import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/IProduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  data:FormData
  form!: FormGroup;
  oldProduct:IProduct;
  id:string=""
  isLoading=false;
  constructor(
    private router:Router,
    private builder: FormBuilder,
    private prdSrv:ProductService,
    private activRoute :ActivatedRoute) {
    this.data = new FormData()
    this.oldProduct = {}
  }
  ngOnInit() {
    this.activRoute.params.subscribe({
      next:(prams)=>{
        this.id = prams["id"]
        this.prdSrv.getByID(prams["id"]).subscribe({
          next:(res)=>{
            this.oldProduct = res.data as IProduct;
            this.buildForm()
            this.isLoading = true
          }
        })
      }
    })
  }
  get listColors() {
    return this.form.controls["colors"] as FormArray
  }
  add() {
    this.listColors.push(new FormControl('#000000'))
  }
  remove(index: number) {
    this.listColors.removeAt(index)
  }
  upload(data:any){
    this.data.append('imgURL',data[0])
  }
  buildForm(){
    ////to appand Coloer ayyay
    let list = this.builder.array([])
    this.oldProduct.colors = String(this.oldProduct.colors![0]).split(",")
    for (const item of this.oldProduct.colors!) {
      list.push(new FormControl(item))
    }


    this.form = this.builder.group({
      name: [this.oldProduct.name, [Validators.required]],
      description: [this.oldProduct.description, [Validators.required]],
      quantity: [this.oldProduct.quantity, [Validators.required]],
      price: [this.oldProduct.price, [Validators.required]],
      colors: list ,
      categoryID: [this.oldProduct.categoryID],
    })
  }
  send() {
    console.log(this.form.value)
    console.log(this.id)
    for (const key in this.form.controls) {
      this.data.append(key,this.form.controls[key].value)
    }
    this.prdSrv.edit(this.data,this.id).subscribe({
      next:(res)=>{
        if(res.success){
          //goo to home
          this.router.navigateByUrl('/home')
        }
        else{
          alert(res.message)
        }
      }
    })

  }

}

