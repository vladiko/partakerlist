import { TestBed, inject } from '@angular/core/testing';

import { PartakerService } from './partaker.service';

describe('PartakerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartakerService]
    });
  });

  it('should be created', inject([PartakerService], (service: PartakerService) => {
    expect(service).toBeTruthy();
  }));
});
