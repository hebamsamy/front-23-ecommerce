import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from '../Components/layout/layout.component';
import { SharedModule } from '../shared/shared.module';

let UserRoutes:Routes=[
  {path:'wishlist',component:WishlistComponent},
  {path:'cart',component:CartComponent},
  {path:'profile',component:ProfileComponent},
]

@NgModule({
  declarations: [
    ProfileComponent,
    CartComponent,
    WishlistComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(UserRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class UserModule { }
