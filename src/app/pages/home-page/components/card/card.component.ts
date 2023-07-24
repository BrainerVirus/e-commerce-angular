import { Component, Input } from '@angular/core';
import { Product } from '../../../../shared/types/product.ds';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() product!: Product;
  @Input() cost: number = 990;
}
