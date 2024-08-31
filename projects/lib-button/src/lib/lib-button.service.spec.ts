import { TestBed } from '@angular/core/testing';

import { LibButtonService } from './lib-button.service';

describe('LibButtonService', () => {
  let service: LibButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
