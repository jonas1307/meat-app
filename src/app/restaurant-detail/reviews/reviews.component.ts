import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../restaurants/restaurants.service';
import { Observable } from "rxjs/Observable";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  animations: [
    trigger('reviewsAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate('300ms 0s ease-in')
      ])
    ])
  ]
})

export class ReviewsComponent implements OnInit {

  reviewsState = 'ready'

  reviews: Observable<any>

  constructor(private restaurantService: RestaurantService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restaurantService.reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
  }

}
