import { Routes } from '@angular/router'
import { OrderComponent } from './order.component'
import { OrderGuard } from './order.guard';

export const ROUTES: Routes = [
  { path: '', component: OrderComponent, canDeactivate: [OrderGuard] }
]
