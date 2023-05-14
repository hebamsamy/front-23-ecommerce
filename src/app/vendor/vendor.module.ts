import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DashbourdComponent } from './dashbourd/dashbourd.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { VendorLayoutComponent } from './vendor-layout/vendor-layout.component';
import { SharedModule } from '../shared/shared.module';
let vendorRoutes:Routes=[
 {path:"",component:VendorLayoutComponent,children:[
  {path:"",redirectTo:"dashbourd",pathMatch:"full"},
  {path:'dashbourd',component:DashbourdComponent},
  {path:'add-product',component:AddProductComponent},
  {path:'edit-product/:id',component:EditProductComponent},
  {path:'product-list',component:ListComponent},
 ]}


]


@NgModule({
  declarations: [
    ListComponent,
    DashbourdComponent,
    AddProductComponent,
    EditProductComponent,
    VendorLayoutComponent
  ],
  imports: [
    RouterModule.forChild(vendorRoutes),
    SharedModule
  ],
  exports:[
    RouterModule
  ]
})
export class VendorModule { }
