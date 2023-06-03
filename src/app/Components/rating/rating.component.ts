import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
})
export class RatingComponent {
  @Input() rating: number = 0;
  @Input() amountOfRatings: number = 0;

  shouldApplyHoverClass(position: number): boolean {
    return this.rating > 0 && this.rating <= position;
  }
}
