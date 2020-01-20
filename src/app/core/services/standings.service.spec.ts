import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StandingsService } from './standings.service';

describe('StandingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const service: StandingsService = TestBed.get(StandingsService);
    expect(service).toBeTruthy();
  });
});
