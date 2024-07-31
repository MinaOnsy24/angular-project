import { TestBed } from '@angular/core/testing';

import { ProdactService } from './prodact.service';

describe('ProdactService', () => {
  let service: ProdactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
