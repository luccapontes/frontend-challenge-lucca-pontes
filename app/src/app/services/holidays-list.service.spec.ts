import { TestBed } from '@angular/core/testing';

import { HolidaysListService } from './holidays-list.service';

describe('HolidaysListService', () => {
  let service: HolidaysListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HolidaysListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
