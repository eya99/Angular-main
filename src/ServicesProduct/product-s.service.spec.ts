import { TestBed } from '@angular/core/testing';

import { ProduitSService } from './product-s.service';

describe('ProductSService', () => {
  let service: ProduitSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduitSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
