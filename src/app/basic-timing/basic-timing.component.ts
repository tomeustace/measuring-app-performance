import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-timing',
  templateUrl: './basic-timing.component.html',
  styleUrls: ['./basic-timing.component.scss']
})
export class BasicTimingComponent implements OnInit {

  performanceTime: number;

  constructor() { }

  ngOnInit(): void {
    // fix prism display issue by reloading!!
    if (!localStorage.getItem('reload')) {
        localStorage.setItem('reload', 'no reload')
        location.reload()
      } else {
        localStorage.removeItem('reload')
      }
  }

  runPerformance() {
    this.performanceTime = undefined;
    const t0 = performance.now();
    for (let i = 0; i < this.randomNumber(10000, 100000); i++) {
      // do stuff
    }
    const t1 = performance.now();
    this.performanceTime = t1 - t0;
  }

  randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
}
