import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BublesSliderComponent } from './bubbles-slider.component';

describe('BublesSliderComponent', () => {
  let component: BublesSliderComponent;
  let fixture: ComponentFixture<BublesSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BublesSliderComponent],
    });
    fixture = TestBed.createComponent(BublesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
