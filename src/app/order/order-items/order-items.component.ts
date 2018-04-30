import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../restaurant-detail/shopping-cart/shopping-cart-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

  @Input() items: CartItem[]

  @Output() increaseQuantity = new EventEmitter<CartItem>()

  @Output() decreaseQuantity = new EventEmitter<CartItem>()

  @Output() removeItem = new EventEmitter<CartItem>()

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQuantity(item: CartItem) {
    this.increaseQuantity.emit(item)
  }

  emitDecreaseQuantity(item: CartItem) {
    this.decreaseQuantity.emit(item)
  }

  emitRemove(item: CartItem) {
    this.removeItem.emit(item)
  }
}
