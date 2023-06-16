import { Component, Input } from '@angular/core';
import { FeatherComponent } from 'angular-feather';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() icon: string = '';
  @Input() iconClass: string = '';
}
