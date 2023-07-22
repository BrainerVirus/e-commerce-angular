import { Component, Input, OnInit } from '@angular/core';
import { SilderImage } from './banner-silder.ds';

@Component({
  selector: 'app-product-silder',
  templateUrl: './banner-silder.component.html',
})
export class BannerSilderComponent implements OnInit {
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

  ngOnInit() {
    setInterval(() => {
      this.nextSlide();
    }, 10000);
  }
}
