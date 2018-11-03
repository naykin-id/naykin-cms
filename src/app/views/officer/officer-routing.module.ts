import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfficerComponent } from './officer.component';
import { PositionComponent } from './position.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Officer'
    },
    children: [
      {
        path: 'officer',
        component: OfficerComponent,
        data: {
          title: 'Officer'
        }
      },
      {
        path: 'position',
        component: PositionComponent,
        data: {
          title: 'Position'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficerRoutingModule {}
