import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component'
import { OrderComponent } from './order.component'
import { OrderItemsComponent } from './order-items/order-items.component'
import { ROUTES } from './order.routes'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [DeliveryCostsComponent, OrderComponent, OrderItemsComponent],
  imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class OrderModule { }
