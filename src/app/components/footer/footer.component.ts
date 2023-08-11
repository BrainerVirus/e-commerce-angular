// footer.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { ThemeStatusService } from 'src/app/theme-status-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  constructor(private themeStatusService: ThemeStatusService) {}

  @Input() currentTheme = false; // Default value

  width: number = 0;

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
