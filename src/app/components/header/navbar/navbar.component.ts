// navbar.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { ThemeService } from '../../../theme.service';
import { ThemeStatusService } from '../../../theme-status-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private themeService: ThemeService,
    private themeStatusService: ThemeStatusService
  ) {}

  @Input() currentTheme = this.themeService.getCurrentTheme();

  @Input() isToggled: boolean = false;
  width: number = 0;

  toggleTheme() {
    this.themeService.toggleTheme();
    this.currentTheme = this.themeService.getCurrentTheme();
  }

  handleToggle() {
    this.isToggled = !this.isToggled;
  }

  ngOnInit(): void {
    this.updateWidth();
    window.addEventListener('resize', this.handleResize);

    this.themeStatusService.themeStatus$.subscribe((isDarkTheme) => {
      this.currentTheme = isDarkTheme;
    });
  }

  handleResize = (): void => {
    this.updateWidth();
  };

  updateWidth(): void {
    this.width = window.innerWidth;
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.handleResize);
  }
}
