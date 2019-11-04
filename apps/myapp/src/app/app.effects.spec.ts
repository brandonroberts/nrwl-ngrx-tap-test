import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot } from 'jasmine-marbles';

import { AppEffects } from './app.effects';
import { AppService } from './app.service';
import { loadApps } from './app.actions';

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

  it('should do something when the loadApps action is dispatched (marble)', () => {
    const action = loadApps();
    spyOn(appService, 'doSomething');

    actions$ = hot('--a', { a: action });
    const expected = hot('--b', { b: action });

    expect(effects.loadApps$).toBeObservable(expected);
    expect(appService.doSomething).toHaveBeenCalled();
  });

  it('should do something when the loadApps action is dispatched (subscribe)', done => {
    const action = loadApps();
    spyOn(appService, 'doSomething');

    actions$ = of(action);

    effects.loadApps$.subscribe(result => {
      expect(result).toEqual(action);
      expect(appService.doSomething).toHaveBeenCalled();
      done();
    });
  });
});
