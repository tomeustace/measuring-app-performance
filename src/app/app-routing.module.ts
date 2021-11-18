import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicTimingComponent } from './basic-timing/basic-timing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MeasureMarkComponent } from './measure-mark/measure-mark.component';
import { PerformanceObserverComponent } from './performance-observer/performance-observer.component';
import { ResourcesComponent } from './resources/resources.component';
import { TachometerComponent } from './tachometer/tachometer.component';

const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
  },
  {
    path: 'basic-timing', component: BasicTimingComponent
  },
  {
    path: 'measure-mark', component: MeasureMarkComponent
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
