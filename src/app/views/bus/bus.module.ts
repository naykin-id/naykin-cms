// Angular
import { NgModule } from '@angular/core';

import { BusComponent } from './bus.component';
import { BusTypeComponent } from './bus-type.component';
import { SeatComponent } from './seat.component';
import { BusFleetComponent } from './bus-fleet.component';
import { AgentComponent } from './agent.component';

// Components Routing
import { BusRoutingModule } from './bus-routing.module';

@NgModule({
  imports: [
    BusRoutingModule
  ],
  declarations: [
    BusComponent,
    BusTypeComponent,
    SeatComponent,
    BusFleetComponent,
    AgentComponent
  ]
})
export class BusModule { }
