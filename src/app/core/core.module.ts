import { NgModule } from '@angular/core'
import { OrderService } from '../order/order.service'
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service'
import { RestaurantService } from '../restaurants/restaurants.service'
import { NotificationService } from '../shared/messages/notification.service'

@NgModule({
  providers: [OrderService, ShoppingCartService, RestaurantService, NotificationService]
})
export class CoreModule { }
