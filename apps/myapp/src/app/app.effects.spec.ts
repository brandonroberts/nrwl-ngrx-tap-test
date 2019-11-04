import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AppEffects } from './app.effects';
import { AppService } from './app.service';

describe('AppEffects', () => {
  let actions$: Observable<any>;
  let effects: AppEffects;
  let appService: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppEffects,
        provideMockActions(() => actions$),
        AppService
      ]
    });

    effects = TestBed.get<AppEffects>(AppEffects);
    appService = TestBed.get<AppService>(AppService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
