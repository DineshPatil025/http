import { TestBed } from '@angular/core/testing';

import { MatsnackService } from './matsnack.service';

describe('MatsnackService', () => {
  let service: MatsnackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatsnackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
