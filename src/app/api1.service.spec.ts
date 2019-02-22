import { TestBed } from '@angular/core/testing';

import { Api1Service } from './api1.service';

describe('Api1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Api1Service = TestBed.get(Api1Service);
    expect(service).toBeTruthy();
  });
});
