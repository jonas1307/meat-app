import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  @Output() rated = new EventEmitter<number>()

  rates: number[] = [1, 2, 3, 4, 5]

  rate: number = 0

  temporaryRating: number

  constructor() { }

  ngOnInit() {
  }

  setRate(rating: number) {
    this.rate = rating
    this.temporaryRating = undefined
    this.rated.emit(this.rate)
  }

  setTemporaryRate(rating: number) {
    if (this.temporaryRating === undefined) {
      this.temporaryRating = this.rate
    }

    this.rate = rating
  }

  clearTemporaryRate() {
    if (this.temporaryRating !== undefined) {
      this.rate = this.temporaryRating
      this.temporaryRating = undefined
    }
  }

}
