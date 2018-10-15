import { NgModule } from '@angular/core'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { OrderService } from '../order/order.service'
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service'
import { RestaurantService } from '../restaurants/restaurants.service'
import { NotificationService } from '../shared/messages/notification.service'
import { LoginService } from 'app/security/login/login.service';
import { LoginGuard } from 'app/security/login/login.guard';
import { OrderGuard } from 'app/order/order.guard';
import { AuthInterceptor } from 'app/security/auth.interceptor';

@NgModule({
  providers: [
    LoginGuard,
    LoginService,
    OrderGuard,
    OrderService,
    ShoppingCartService,
    RestaurantService,
    NotificationService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class CoreModule { }
