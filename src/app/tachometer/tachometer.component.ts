import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HighlightService } from '../highlight.service';

@Component({
  selector: 'app-tachometer',
  templateUrl: './tachometer.component.html',
  styleUrls: ['./tachometer.component.scss']
})
export class TachometerComponent implements OnInit {

  constructor(private highlightService: HighlightService) { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.highlightService.highlightAll();
  }

}
