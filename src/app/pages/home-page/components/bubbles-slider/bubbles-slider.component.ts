import { Component, Input } from '@angular/core';
import { type Bubble } from './bubble.ds';

@Component({
  selector: 'app-bubbles-slider',
  templateUrl: './bubbles-slider.component.html',
})
export class BubblesSliderComponent {
  @Input() bubbles: Bubble[] = [
    {
      img: '../../../../../assets/img/hot-deals.webp',
      title: 'Hot Deals',
      classes: 'lg:p-[2px]',
    },
    {
      img: '../../../../../assets/img/deskptop.webp',
      title: 'Desktop',
      classes: 'lg:p-[7px]',
    },
    {
      img: '../../../../../assets/img/gaming-laptop.webp',
      title: 'Laptops',
      classes: '',
    },
    {
      img: '../../../../../assets/img/iphone-14.webp',
      title: 'Smartphones',
      classes: '',
    },
    {
      img: '../../../../../assets/img/ipad-2018.webp',
      title: 'Tablets',
      classes: '',
    },
    {
      img: '../../../../../assets/img/ps5.webp',
      title: 'Consoles',
      classes: 'lg:p-[10px]',
    },
    {
      img: '../../../../../assets/img/apple-watch.webp',
      title: 'Wearables',
      classes: '',
    },
    {
      img: '../../../../../assets/img/electronics.webp',
      title: 'More',
      classes: 'lg:p-[2px]',
    },
  ];
}
