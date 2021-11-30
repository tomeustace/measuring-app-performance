import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve } from '@angular/router';
import { BasicTimingComponent } from './basic-timing/basic-timing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MeasureMarkComponent } from './measure-mark/measure-mark.component';
import { PerformanceObserverComponent } from './performance-observer/performance-observer.component';
import { ResourcesComponent } from './resources/resources.component';
import { TachometerComponent } from './tachometer/tachometer.component';

import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyResolver implements Resolve<Observable<string>> {
  resolve(): Observable<string> {
    performance.mark('resolved-data-start');
    return of('Resolved Data').pipe(delay(500));
  }
}

const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
  },
  {
    path: 'basic-timing', component: BasicTimingComponent
  },
  {
    path: 'measure-mark', component: MeasureMarkComponent, data: {name: 'Measure Mark'}, resolve: { message: MyResolver }
  },
  {
    path: 'performance-observer', component: PerformanceObserverComponent
  },
  {
    path: 'tachometer', component: TachometerComponent
  },
  {
    path: 'resources', component: ResourcesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
