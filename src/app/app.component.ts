import { Component } from '@angular/core';
import { start, stop } from './../../node_modules/tachometer/client/lib/bench.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Measuring Application Performance';

  ngOnInit() {
    // start();
    // for (let i = 0; i < 100; i++) {
    //   document.body.innerHTML += '<button></button>';
    // }
    // stop();


    // TODO MOVE TO OWN LAZY LOADED COMPONENT
    // performance.mark('foo-start');
    // // Do some work ...
    // for (let i = 0; i < 100; i++) {
    //   document.body.innerHTML += '<button></button>';
    // }
    // performance.mark('foo-stop');
    // performance.measure('foo', 'foo-start', 'foo-stop');
  }
}
