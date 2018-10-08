import { NgModule, LOCALE_ID } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module'
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component'
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { ROUTES } from './app.routes'
import { SharedModule } from './shared/shared.module'
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSummaryComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules }),
    SharedModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
