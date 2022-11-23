import { TestBed } from '@angular/core/testing';

import { BarallaService } from './baralla.service';

describe('BarallaService', () => {
  let service: BarallaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarallaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
