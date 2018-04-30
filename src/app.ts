import {autoinject} from 'aurelia-framework';
import {connectTo, Store} from 'aurelia-store';
import {State} from './state';
// import {Subscription} from 'rxjs';

@autoinject
@connectTo()
export class App {
  state: State;
  // sub: Subscription;

  constructor(private store: Store<State>) {
    this.store.registerAction(act.name, act);
  }

  // attached() {
  //   this.sub = this.store.state.subscribe((s: State) => (this.state = s));
  // }

  // detached() {
  //   this.sub.unsubscribe();
  // }

  act() {
    this.store.dispatch(act);
  }
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const act = (s: State): State => {
  const n = Object.assign({}, s);
  n.letters.push(alphabet[s.letters.length]);
  return n;
};
