/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MainServiceService } from './main-service.service';

describe('MainServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainServiceService]
    });
  });

  it('should ...', inject([MainServiceService], (service: MainServiceService) => {
    expect(service).toBeTruthy();
  }));
});
