import { NgModule } from '@angular/core';

import { RouteComponent } from './route.component';
import { ScheduleComponent } from './schedule.component';

// Components Routing
import { TravelRoutingModule } from './travel-routing.module';

@NgModule({
  imports: [ 
    TravelRoutingModule 
  ],
  declarations: [
    RouteComponent,
    ScheduleComponent
  ]
})
export class TravelModule { }
