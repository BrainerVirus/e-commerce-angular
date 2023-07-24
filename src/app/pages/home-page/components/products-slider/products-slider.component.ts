import {
  Component,
  HostListener,
  OnInit,
  ElementRef,
  Input,
} from '@angular/core';
import { ProductService } from 'src/app/shared/services/product/products.service';
import { Product } from 'src/app/shared/types/product.ds';

@Component({
  selector: 'app-products-slider',
  templateUrl: './products-slider.component.html',
})
export class ProductsSliderComponent implements OnInit {
  width: number = 0;
  data: Product[] = [];
  loading: boolean = false;
  visibleData: Product[] = [];
  itemsToShow: number = 10; // Number of products to show in the slider at once
  @Input() hovering: boolean = false; // Whether the slider is hovered or not

  hadleHover(): void {
    this.hovering = true;
  }

  handleHoverEnd(): void {
    this.hovering = false;
  }

  handleResize = (): void => {
    this.updateWidth();
  };

  updateWidth(): void {
    this.width = window.innerWidth;
    console.log('screen width: ', this.width);
  }

  // Virtual index for the carousel
  virtualIndex: number = 0;

  // Add Intersection Observer
  private observer!: IntersectionObserver;

  // Variables for touchstart event
  touchStartX!: number;

  constructor(
    private productService: ProductService,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    this.updateWidth();
    this.loadData();
    // Create the Intersection Observer when the component initializes
    this.createIntersectionObserver();
    window.addEventListener('resize', this.handleResize);
  }

  ngOnDestroy() {
    // Make sure to disconnect the Intersection Observer when the component is destroyed
    this.observer.disconnect();
    window.removeEventListener('resize', this.handleResize);
  }

  loadData() {
    this.loading = true;
    this.productService.fetchData().subscribe((response) => {
      this.data = response.filter(
        (product) =>
          product.category &&
          // product.category.name === 'Electronics' &&
          product.title &&
          product.images.length > 0
      );
      this.updateVisibleData(); // Initialize visibleData
      this.loading = false;
    });
  }

  // Create the Intersection Observer
  private createIntersectionObserver() {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No margin added to the root
      threshold: 0.25, // Trigger when 25% of the item is visible
    };

    // Create the observer with the specified options
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the item is intersecting (i.e., 25% or more visible), load more products
          this.loadMoreProducts();
        }
      });
    }, options);

    // Start observing the last element in the slider content
    const sliderContent =
      this.elementRef.nativeElement.querySelector('.slider-content');
    const sliderItems = sliderContent?.querySelectorAll('.slider-item');
    const lastItem = sliderItems?.[sliderItems.length - 1];

    if (lastItem) {
      this.observer.observe(lastItem);
    }
  }

  // Load more products and update the visibleData array
  private loadMoreProducts() {
    const startIndex = this.virtualIndex + this.visibleData.length;
    const endIndex = startIndex + this.itemsToShow;
    if (endIndex <= this.data.length) {
      // No need to wrap around, directly slice the data array
      this.visibleData = this.data.slice(startIndex, endIndex);
    } else {
      // Wrap around and take products from the beginning to complete the itemsToShow
      this.visibleData = [
        ...this.data.slice(startIndex),
        ...this.data.slice(0, endIndex - this.data.length),
      ];
    }
  }

  // Handle touchstart event
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
  }

  // Handle touchend event
  onTouchEnd(event: TouchEvent) {
    const touchEndX = event.changedTouches[0].clientX;
    const deltaX = this.touchStartX - touchEndX;

    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        // Swipe left, moveRight() logic
        this.moveRight();
      } else {
        // Swipe right, moveLeft() logic
        this.moveLeft();
      }
    }
  }

  moveLeft(): void {
    this.virtualIndex--;
    this.updateVisibleData();
  }

  moveRight(): void {
    this.virtualIndex++;
    this.updateVisibleData();
  }

  // Update visibleData based on the virtual index
  private updateVisibleData() {
    // Calculate the effective index to simulate the circular buffer
    const effectiveIndex = this.virtualIndex % this.data.length;
    const endIndex = effectiveIndex + this.itemsToShow;
    if (endIndex <= this.data.length) {
      // No need to wrap around, directly slice the data array
      this.visibleData = this.data.slice(effectiveIndex, endIndex);
    } else {
      // Wrap around and take products from the beginning to complete the itemsToShow
      this.visibleData = [
        ...this.data.slice(effectiveIndex),
        ...this.data.slice(0, endIndex - this.data.length),
      ];
    }
  }
}
