import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSilderComponent } from './banner-silder.component';

describe('ProductSilderComponent', () => {
  let component: BannerSilderComponent;
  let fixture: ComponentFixture<BannerSilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerSilderComponent],
    });
    fixture = TestBed.createComponent(BannerSilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
