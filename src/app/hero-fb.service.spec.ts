import { TestBed, inject } from '@angular/core/testing';

import { HeroFbService } from './hero-fb.service';

describe('HeroFbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroFbService]
    });
  });

  it('should be created', inject([HeroFbService], (service: HeroFbService) => {
    expect(service).toBeTruthy();
  }));
});
