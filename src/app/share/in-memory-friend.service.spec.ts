import { TestBed } from '@angular/core/testing';

import { InMemoryFriendService } from './in-memory-friend.service';

describe('InMomoryFriendService', () => {
  let service: InMemoryFriendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryFriendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
