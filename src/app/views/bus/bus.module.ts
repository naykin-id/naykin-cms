// Angular
import { NgModule } from '@angular/core';

import { BusComponent } from './bus.component';
import { BusTypeComponent } from './bus-type.component';
import { SeatComponent } from './seat.component';
import { BusFleetComponent } from './bus-fleet.component';
import { AgentComponent } from './agent.component';

// Components Routing
import { BusRoutingModule } from './bus-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BusRoutingModule,
    FormsModule,
    ModalModule.forRoot()
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
