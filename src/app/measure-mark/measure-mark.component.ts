import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HighlightService } from '../highlight.service';
import { PerformanceService } from '../performance.service';
@Component({
  selector: 'app-measure-mark',
  templateUrl: './measure-mark.component.html',
  styleUrls: ['./measure-mark.component.scss']
})
export class MeasureMarkComponent {

  constructor(private route: ActivatedRoute, private highlightService: HighlightService, private performanceService: PerformanceService) {
    performanceService.startPerformanceObserver(this.constructor.name, ['mark', 'measure']);

    performance.mark('constructor');
    this.route.data.subscribe(data => {
      performance.mark('resolved-data-end');
      performance.measure('resolved-data', 'resolved-data-start', 'resolved-data-end');

      // DON'T USE OUTSIDE OF CHROME, NOT STANDARD API
      // console.log("Used JS Heap Size", (performance?.memory.usedJSHeapSize / 1048576).toFixed(2) + "MB");
    });
  }

  ngOnInit() {
    performance.mark('onInit');
    let now;
    for (let i = 0; i < 100000; i++) {
      now = new Date();
    }
  }

  ngAfterViewInit() {
    this.highlightService.highlightAll();
    performance.mark('afterViewInit');

    performance.measure('onInit-to-afterViewInit', 'onInit', 'afterViewInit');
    // performance.measure('constructor-to-viewinit', 'constructor', 'afterViewInit');
  }

  ngOnDestroy() {
    this.performanceService.stopPerformanceObserver();
  }

}
