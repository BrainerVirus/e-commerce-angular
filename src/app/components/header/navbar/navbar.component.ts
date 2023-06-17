import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Input() isToggled: boolean = false;

  handleToggle() {
    this.isToggled = !this.isToggled;
  }
}
