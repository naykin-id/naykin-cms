import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteComponent } from './route.component';
import { ScheduleComponent } from './schedule.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Travel'
    },
    children: [
      {
        path: 'route',
        component: RouteComponent,
        data: {
          title: 'Route'
        }
      },
      {
        path: 'schedule',
        component: ScheduleComponent,
        data: {
          title: 'Schedule'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelRoutingModule {}
