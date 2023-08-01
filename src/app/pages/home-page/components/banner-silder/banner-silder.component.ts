import { Component, Input, OnInit } from '@angular/core';
import { SilderImage } from './banner-silder.ds';

@Component({
  selector: 'app-banner-silder',
  templateUrl: './banner-silder.component.html',
})
export class BannerSilderComponent implements OnInit {
  private touchStartX: number = 0;
  private touchEndX: number = 0;
  private readonly SWIPE_THRESHOLD: number = 50; // Adjust this threshold as needed

  @Input() images: SilderImage[] = [
    {
      url: '../../../../../assets/img/macbook-1920x1080.webp',
      description:
        'Stay connected and productive on-the-go with our lightweight and portable laptops.',
    },
    {
      url: '../../../../../assets/img/xbox-controller-1920x1080.webp',
      description:
        'Experience crystal-clear audio and all day comfort with our premium earbuds.',
    },
    {
      url: '../../../../../assets/img/airpods-1920x1080.webp',
      description:
        'Experience the ultimate gaming setup with our comprehensive range of consoles and accessories',
    },
  ];

  private _index: number = 0;

  @Input()
  set index(value: number) {
    if (value >= 0 && value <= 2 && this.images.length === 3) {
      this._index = value;
    } else {
      console.error('Invalid index or images length');
    }
  }

  get index(): number {
    return this._index;
  }

  nextSlide() {
    this.index = (this.index + 1) % this.images.length;
  }

  previousSlide() {
    this.index = (this.index - 1 + this.images.length) % this.images.length;
  }

  setToFirstSlide() {
    this.index = 0;
  }

  setToSecondSlide() {
    this.index = 1;
  }

  setToLastSlide() {
    this.index = 2;
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchMove(event: TouchEvent) {
    this.touchEndX = event.touches[0].clientX;
  }

  onTouchEnd() {
    const distanceX = this.touchEndX - this.touchStartX;

    if (Math.abs(distanceX) > this.SWIPE_THRESHOLD) {
      if (distanceX > 0) {
        // Swiped right, go to previous slide
        this.previousSlide();
      } else {
        // Swiped left, go to next slide
        this.nextSlide();
      }
    }

    // Reset the touch variables for the next swipe
    this.touchStartX = this.touchEndX = 0;
  }

  ngOnInit() {
    setInterval(() => {
      this.nextSlide();
    }, 10000);
  }
}
