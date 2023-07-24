import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../shared/services/product/products.service';
import { Product } from '../../../../shared/types/product.ds';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
})
export class ProductGridComponent implements OnInit {
  data: Product[] = [];
  loding: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loding = true;
    this.productService.fetchData().subscribe((response) => {
      this.data = response.filter(
        (product) =>
          product.category &&
          // product.category.name === 'Electronics' &&
          product.title &&
          product.images.length > 0
      );
      console.log(
        '🚀 ~ file: rating.component.ts:23 ~ RatingComponent ~ this.productService.fetchData ~ data:',
        this.data
      );
      this.loding = false;
    });
  }
}
