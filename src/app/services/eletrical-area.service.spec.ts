import { TestBed } from '@angular/core/testing';

import { EletricalAreaService } from './eletrical-area.service';

describe('EletricalAreaService', () => {
  let service: EletricalAreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EletricalAreaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
