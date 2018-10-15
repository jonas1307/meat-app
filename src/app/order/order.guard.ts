import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { OrderComponent } from "./order.component";

export class OrderGuard implements CanDeactivate<OrderComponent> {

    constructor() { }

    canDeactivate(orderComponent: OrderComponent, activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean {
        if (!orderComponent.isOrderCompleted()) {
            return window.confirm('Deseja realmente desistir da compra?')
        }
        return true
    }
}
