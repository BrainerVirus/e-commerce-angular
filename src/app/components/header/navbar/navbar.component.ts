import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() isToggled: boolean = false;
  width: number = 0;

  handleToggle() {
    this.isToggled = !this.isToggled;
  }

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
