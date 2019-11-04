import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadApps } from './app.actions';

@Component({
  selector: 'ngrx-tap-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';

  constructor(private store: Store<{}>) {}

  loadApps() {
    this.store.dispatch(loadApps());
  }
}
