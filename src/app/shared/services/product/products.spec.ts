import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ProductService } from './products.service';
import { Product } from '../../types/product.ds';

describe('ProductService', () => {
  let productService: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService],
    });

    productService = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch products successfully', () => {
    const mockProducts: Product[] = [
      {
        id: 1,
        title: 'Product 1',
        price: 10,
        description: 'Description 1',
        images: ['image1.jpg', 'image2.jpg'],
        creationAt: new Date(),
        updatedAt: new Date(),
        category: {
          id: 1,
          name: 'Category 1',
          image: 'category1.jpg',
          creationAt: new Date(),
          updatedAt: new Date(),
        },
      },
      {
        id: 2,
        title: 'Product 2',
        price: 20,
        description: 'Description 2',
        images: ['image3.jpg', 'image4.jpg'],
        creationAt: new Date(),
        updatedAt: new Date(),
        category: {
          id: 2,
          name: 'Category 2',
          image: 'category2.jpg',
          creationAt: new Date(),
          updatedAt: new Date(),
        },
      },
    ];

    productService.fetchData().subscribe((products: Product[]) => {
      expect(products.length).toBe(2);
      expect(products).toEqual(mockProducts);
    });

    const request = httpMock.expectOne(
      'https://api.escuelajs.co/api/v1/products'
    );
    expect(request.request.method).toBe('GET');
    request.flush(mockProducts);
  });
});
