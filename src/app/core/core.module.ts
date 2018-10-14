import { NgModule } from '@angular/core'
import { OrderService } from '../order/order.service'
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service'
import { RestaurantService } from '../restaurants/restaurants.service'
import { NotificationService } from '../shared/messages/notification.service'
import { LoginService } from 'app/security/login/login.service';

@NgModule({
  providers: [LoginService, OrderService, ShoppingCartService, RestaurantService, NotificationService]
})
export class CoreModule { }
