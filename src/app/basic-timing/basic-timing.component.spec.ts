import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTimingComponent } from './basic-timing.component';

describe('BasicTimingComponent', () => {
  let component: BasicTimingComponent;
  let fixture: ComponentFixture<BasicTimingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicTimingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicTimingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
