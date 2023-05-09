import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { ProductCardComponent } from './Components/product-card/product-card.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { AboutUSComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { CartComponent } from './Components/cart/cart.component';
import { DetailsComponent } from './Components/details/details.component';
// import { MyRoute } from './myroute';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    WishlistComponent,
    ProductCardComponent,
    LoginComponent,
    RegisterComponent,
    AboutUSComponent,
    ContactUsComponent,
    NotFoundComponent,
    CartComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // MyRoute
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
