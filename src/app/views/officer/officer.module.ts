import { NgModule } from '@angular/core';

import { OfficerComponent } from './officer.component';
import { PositionComponent } from './position.component';

// Components Routing
import { OfficerRoutingModule } from './officer-routing.module';

@NgModule({
  imports: [
    OfficerRoutingModule
  ],
  declarations: [
    OfficerComponent,
    PositionComponent
  ]
})
export class OfficerModule { }
