import { Component, OnInit } from '@angular/core';
import { HighlightService } from '../highlight.service';
import { PerformanceService } from '../performance.service';

@Component({
  selector: 'app-performance-observer',
  templateUrl: './performance-observer.component.html',
  styleUrls: ['./performance-observer.component.scss']
})
export class PerformanceObserverComponent implements OnInit {

  constructor(
    private performanceService: PerformanceService,
    private highlightService: HighlightService
    ) {
    this.performanceService.startPerformanceObserver(this.constructor.name);
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.highlightService.highlightAll();
  }

  ngOnDestroy(): void {
    this.performanceService.stopPerformanceObserver();
  }

}
