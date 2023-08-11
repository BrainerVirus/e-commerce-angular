// theme.service.ts
import { Injectable } from '@angular/core';
import { ThemeStatusService } from './theme-status-service.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _darkMode = false;

  constructor(private themeStatusService: ThemeStatusService) {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    this._darkMode = prefersDark;
    this.applyTheme();
    this.themeStatusService.updateThemeStatus(this._darkMode);
  }

  toggleTheme() {
    this._darkMode = !this._darkMode;
    this.applyTheme();
    this.themeStatusService.updateThemeStatus(this._darkMode);
  }

  getCurrentTheme() {
    return this._darkMode;
  }

  private applyTheme() {
    if (this._darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }
}
