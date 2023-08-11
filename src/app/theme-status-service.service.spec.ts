import { TestBed } from '@angular/core/testing';

import { ThemeStatusServiceService } from './theme-status-service.service';

describe('ThemeStatusServiceService', () => {
  let service: ThemeStatusServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeStatusServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
