import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  data:FormData
  // editform:FormGroup;
  form: FormGroup;

  constructor(
    private router:Router,
    private builder: FormBuilder,
    private prdSrv:ProductService) {
    this.data = new FormData()
    this.form = this.builder.group({
      name: ['test', [Validators.required]],
      description: ['test', [Validators.required]],
      quantity: ['1', [Validators.required]],
      price: ['1', [Validators.required]],
      /// error => colors: [this.builder.array([['']])], control=>array=>[control,control,...]
      colors: this.builder.array([['#000000'],]),
      categoryName: ['1',],
      categoryID: ['1',],
      // imgURL:['',],

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
  ngOnInit() {
  }
  send() {
    for (const key in this.form.controls) {
      this.data.append(key,this.form.controls[key].value)
    }
    this.prdSrv.add(this.data).subscribe({
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
