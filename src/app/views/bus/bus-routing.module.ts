import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusComponent } from './bus.component';
import { BusTypeComponent } from './bus-type.component';
import { SeatComponent } from './seat.component';
import { BusFleetComponent } from './bus-fleet.component';
import { AgentComponent } from './agent.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Bus'
    },
    children: [
      {
        path: 'bus',
        component: BusComponent,
        data: {
          title: 'Bus'
        }
      },
      {
        path: 'bus-type',
        component: BusTypeComponent,
        data: {
          title: 'Bus Type'
        }
      },
      {
        path: 'seat',
        component: SeatComponent,
        data: {
          title: 'Seat'
        }
      },
      {
        path: 'bus-fleet',
        component: BusFleetComponent,
        data: {
          title: 'Bus Fleet'
        }
      },
      {
        path: 'agent',
        component: AgentComponent,
        data: {
          title: 'Agent'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusRoutingModule {}
