import { Action, createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';

export const appFeatureKey = 'app';

export interface State {

}

export const initialState: State = {

};

const appReducer = createReducer(
  initialState,

  on(AppActions.loadApps, state => state),

);

export function reducer(state: State | undefined, action: Action) {
  return appReducer(state, action);
}
