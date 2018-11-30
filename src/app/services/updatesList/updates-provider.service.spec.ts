import { TestBed } from '@angular/core/testing';

import { UpdatesProviderService } from './updates-provider.service';

describe('UpdatesProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdatesProviderService = TestBed.get(UpdatesProviderService);
    expect(service).toBeTruthy();
  });
});
