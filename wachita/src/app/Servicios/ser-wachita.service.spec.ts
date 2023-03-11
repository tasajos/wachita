import { TestBed } from '@angular/core/testing';

import { SerWachitaService } from './ser-wachita.service';

describe('SerWachitaService', () => {
  let service: SerWachitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerWachitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
