import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { tap } from 'rxjs/operators';

import * as AppActions from './app.actions';
import { AppService } from './app.service';


@Injectable()
export class AppEffects {


  loadApps$ = createEffect(() => this.actions$.pipe(
    ofType(AppActions.loadApps),
    tap(() => {
      this.appService.doSomething();
    })
  ), { dispatch: false });

  constructor(
    private actions$: Actions,
    private appService: AppService
  ) { }

}
