import { TestBed } from '@angular/core/testing';

import { StandingsService } from './standings.service';

describe('StandingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StandingsService = TestBed.get(StandingsService);
    expect(service).toBeTruthy();
  });
});
