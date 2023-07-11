import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSilderComponent } from './product-silder.component';

describe('ProductSilderComponent', () => {
  let component: ProductSilderComponent;
  let fixture: ComponentFixture<ProductSilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductSilderComponent],
    });
    fixture = TestBed.createComponent(ProductSilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
