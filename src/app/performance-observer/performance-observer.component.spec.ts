import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceObserverComponent } from './performance-observer.component';

describe('PerformanceObserverComponent', () => {
  let component: PerformanceObserverComponent;
  let fixture: ComponentFixture<PerformanceObserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceObserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
