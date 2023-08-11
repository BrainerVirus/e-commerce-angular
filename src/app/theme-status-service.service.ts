// theme-status.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeStatusService {
  private themeStatusSubject = new BehaviorSubject<boolean>(false);
  themeStatus$: Observable<boolean> = this.themeStatusSubject.asObservable();

  updateThemeStatus(isDarkTheme: boolean) {
    this.themeStatusSubject.next(isDarkTheme);
  }
}
