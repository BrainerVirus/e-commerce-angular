import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  width: number = 0;

  ngOnInit(): void {
    this.updateWidth();
    window.addEventListener('resize', this.handleResize);
  }

  handleResize = (): void => {
    this.updateWidth();
  };

  updateWidth(): void {
    this.width = window.innerWidth;
    console.log(this.width);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.handleResize);
  }
}
