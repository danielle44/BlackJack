import { TestBed } from '@angular/core/testing';

import { NotificationsProviderService } from './notifications-provider.service';

describe('UpdatesProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotificationsProviderService = TestBed.get(NotificationsProviderService);
    expect(service).toBeTruthy();
  });
});
