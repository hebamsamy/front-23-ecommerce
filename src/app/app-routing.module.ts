import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutUSComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { WishlistComponent } from './user/wishlist/wishlist.component';
import { DetailsComponent } from './Components/details/details.component';
import { AddProductComponent } from './vendor/add-product/add-product.component';
import { EditProductComponent } from './vendor/edit-product/edit-product.component';
import { AuthGuard } from './Services/Guard/auth.guard';
import { LayoutComponent } from './Components/layout/layout.component';

const routes: Routes = [
  {
    path: "", component: LayoutComponent, children: [
      { path: '', redirectTo: "home", pathMatch: "full" },
      { path: 'home', component: HomeComponent },
      { path: "about", component: AboutUSComponent },
      { path: "contact", component: ContactUsComponent },
      { path: "product/:id", component: DetailsComponent },
      {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule),
        canActivate: [AuthGuard]
      },
    ]
  },
  ////////////////////////////////////////////
  {
    path: 'vendor',
    loadChildren: () => import('./vendor/vendor.module').then(m => m.VendorModule),
    canActivate: [AuthGuard]
  },
  /////////////////////////////////
  { path: "register", component: RegisterComponent },
  { path: "login/:returnRrl", component: LoginComponent },


  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
