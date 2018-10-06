import { NgModule } from '@angular/core'
import { OrderService } from '../order/order.service'
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service'
import { RestaurantService } from '../restaurants/restaurants.service'

@NgModule({
  providers: [OrderService, ShoppingCartService, RestaurantService]
})
export class CoreModule { }
