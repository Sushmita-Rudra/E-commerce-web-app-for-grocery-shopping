import { TestBed, inject } from '@angular/core/testing';
import {Firebase} from './auth.service';
import { AuthGuard } from './auth-guard.service';

describe('AuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard]
    });
  });

  it('should be created', inject([AuthGuard], (service: AuthGuard) => {
    expect(service).toBeTruthy();
  }));
});
